package main

import (
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
		default:
			return events.APIGatewayProxyResponse{
				StatusCode: http.StatusMethodNotAllowed,
			}, nil
		}
	})

}

func health(request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return events.APIGatewayProxyResponse{
		Body:       fmt.Sprint("Success"),
		StatusCode: http.StatusOK,
	}, nil
}
