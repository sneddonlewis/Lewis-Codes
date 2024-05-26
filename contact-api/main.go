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
	var messageRequest Message

	err := json.Unmarshal([]byte(request.Body), &messageRequest)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       "invalid request",
			StatusCode: http.StatusBadRequest,
		}, err
	}

	// validation
	if messageRequest.Email == "" || messageRequest.Message == "" {
		return events.APIGatewayProxyResponse{
			Body:       "require email and message",
			StatusCode: http.StatusUnprocessableEntity,
		}, fmt.Errorf("request incorrectly formed")
	}

	response := struct {
		MessageStatus string  `json:"message_status"`
		MessageBody   Message `json:"message_body"`
	}{
		MessageStatus: "server is still being developed so this message is returned unprocessed",
		MessageBody:   messageRequest,
	}

	jsonResponse, err := json.Marshal(response)
	if err != nil {
		return events.APIGatewayProxyResponse{
			Body:       "server failure",
			StatusCode: http.StatusInternalServerError,
		}, fmt.Errorf("server failure")
	}

	return events.APIGatewayProxyResponse{
		Body:       string(jsonResponse),
		StatusCode: http.StatusOK,
	}, nil
}

type Message struct {
	Email   string `json:"email"`
	Message string `json:"message"`
}
