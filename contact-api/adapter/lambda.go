package adapter

import (
	"bytes"
	"context"
	"io"
	"net/http"
	"strings"

	"github.com/aws/aws-lambda-go/events"
	"github.com/julienschmidt/httprouter"
)

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
