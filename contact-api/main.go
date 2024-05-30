package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"

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

	lambda.Start(LambdaAdapter(router))
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

func LambdaAdapter(router *httprouter.Router) func(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	return func(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
		// Convert the Lambda request to an http.Request
		httpRequest, err := lambdaRequestToHttpRequest(ctx, req)
		if err != nil {
			return events.APIGatewayProxyResponse{StatusCode: http.StatusBadRequest}, err
		}

		// Capture the response using a ResponseRecorder
		responseRecorder := NewResponseRecorder()

		// Serve the request using the provided httprouter.Router
		router.ServeHTTP(responseRecorder, httpRequest)

		// Convert the recorded response to APIGatewayProxyResponse
		return responseRecorder.ToAPIGatewayProxyResponse(), nil
	}
}

func lambdaRequestToHttpRequest(ctx context.Context, req events.APIGatewayProxyRequest) (*http.Request, error) {
	body := io.NopCloser(bytes.NewReader([]byte(req.Body)))

	httpReq, err := http.NewRequestWithContext(ctx, req.HTTPMethod, req.Path, body)
	if err != nil {
		return nil, err
	}

	httpReq.Header = make(http.Header)
	for key, value := range req.Headers {
		httpReq.Header.Set(key, value)
	}

	q := httpReq.URL.Query()
	for key, values := range req.MultiValueQueryStringParameters {
		for _, value := range values {
			q.Add(key, value)
		}
	}
	httpReq.URL.RawQuery = q.Encode()

	return httpReq, nil
}

type ResponseRecorder struct {
	StatusCode int
	Headers    http.Header
	Body       bytes.Buffer
}

func NewResponseRecorder() *ResponseRecorder {
	return &ResponseRecorder{
		StatusCode: http.StatusOK,
		Headers:    make(http.Header),
	}
}

func (rr *ResponseRecorder) Header() http.Header {
	return rr.Headers
}

func (rr *ResponseRecorder) Write(data []byte) (int, error) {
	return rr.Body.Write(data)
}

func (rr *ResponseRecorder) WriteHeader(statusCode int) {
	rr.StatusCode = statusCode
}

func (rr *ResponseRecorder) ToAPIGatewayProxyResponse() events.APIGatewayProxyResponse {
	headers := map[string]string{}
	for key, values := range rr.Headers {
		headers[key] = strings.Join(values, ",")
	}

	return events.APIGatewayProxyResponse{
		StatusCode: rr.StatusCode,
		Headers:    headers,
		Body:       rr.Body.String(),
	}
}
