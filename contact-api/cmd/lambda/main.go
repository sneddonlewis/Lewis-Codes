package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"contact.sneddsy.com/adapter"
	"contact.sneddsy.com/db"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/julienschmidt/httprouter"
)

func main() {
	// lambda.Start(func(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// 	switch request.Path {
	// 	case "/health":
	// 		return health(request)
	// 	case "/message":
	// 		return message(request)
	// 	default:
	// 		return events.APIGatewayProxyResponse{
	// 			StatusCode: http.StatusMethodNotAllowed,
	// 		}, nil
	// 	}
	// })

	// "github.com/julienschmidt/httprouter" <- let's use this router instead
	router := httprouter.New()
	router.HandlerFunc(http.MethodGet, "/health", healthCheckHandler)

	lambda.Start(adapter.HttpRouterToLambda(router))
}

func healthCheckHandler(res http.ResponseWriter, req *http.Request) {
	js, _ := json.MarshalIndent("Ok", "", "\t")
	res.Write(js)
}

func health(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{
		Body:       "success",
		StatusCode: http.StatusOK,
	}, nil
}

func message(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	corsHeaders := map[string]string{
		"Access-Control-Allow-Origin":  "*",
		"Access-Control-Allow-Methods": "POST, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, Authorization",
	}

	var messageRequest Message

	err := json.Unmarshal([]byte(request.Body), &messageRequest)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       "invalid request",
			StatusCode: http.StatusBadRequest,
			Headers:    corsHeaders,
		}, err
	}

	// validation
	if messageRequest.Email == "" || messageRequest.Message == "" {
		return events.APIGatewayProxyResponse{
			Body:       "require email and message",
			StatusCode: http.StatusUnprocessableEntity,
			Headers:    corsHeaders,
		}, fmt.Errorf("request incorrectly formed")
	}

	client := db.NewClient()

	err = client.CreateMessage(messageRequest.Email, messageRequest.Message)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       "there was an error persisting your message",
			StatusCode: http.StatusInternalServerError,
			Headers:    corsHeaders,
		}, fmt.Errorf("request incorrectly formed")
	}

	response := struct {
		MessageStatus string  `json:"message_status"`
		MessageBody   Message `json:"message_body"`
	}{
		MessageStatus: "Message Sent",
		MessageBody:   messageRequest,
	}

	jsonResponse, err := json.Marshal(response)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       "server failure",
			StatusCode: http.StatusInternalServerError,
			Headers:    corsHeaders,
		}, fmt.Errorf("server failure")
	}

	return events.APIGatewayProxyResponse{
		Body:       string(jsonResponse),
		StatusCode: http.StatusOK,
		Headers:    corsHeaders,
	}, nil
}

type Message struct {
	Email   string `json:"email"`
	Message string `json:"message"`
}
