package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	lambda.Start(func(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
		switch request.Path {
		case "/health":
			return health(request)
		case "/message":
			return message(request)
		default:
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusMethodNotAllowed,
			}, nil
		}
	})

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

	client := NewClient()

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
