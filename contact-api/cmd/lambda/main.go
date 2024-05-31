package main

import (
	"contact.sneddsy.com/adapter"
	"contact.sneddsy.com/rest"

	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	app := rest.App{}
	router := app.Routes()
	lambda.Start(adapter.HttpRouterToLambda(router))
}
