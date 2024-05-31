package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strconv"
	"strings"

	"contact.sneddsy.com/adapter"
	"contact.sneddsy.com/db"
	"contact.sneddsy.com/models"

	"github.com/aws/aws-lambda-go/lambda"
	"github.com/julienschmidt/httprouter"
)

type application struct{}

func main() {

	router := httprouter.New()
	router.HandlerFunc(http.MethodGet, "/health", app.healthCheckHandler)
	router.HandlerFunc(http.MethodPost, "/message", app.messageHandler)

	lambda.Start(adapter.HttpRouterToLambda(router))
}

func (app *application) healthCheckHandler(w http.ResponseWriter, r *http.Request) {
	response := struct {
		Health string `json:"health"`
	}{
		Health: "ok",
	}
	app.writeJSON(w, http.StatusOK, response, nil)
}

func (app *application) messageHandler(w http.ResponseWriter, r *http.Request) {
	var messageRequest models.Message
	err := app.readJSON(w, r, &messageRequest)
	if err != nil {
		app.writeJSON(w, http.StatusUnprocessableEntity, "body does not conform to schema", nil)
		return
	}

	if messageRequest.Email == "" || messageRequest.Message == "" {
		app.writeJSON(w, http.StatusUnprocessableEntity, "require email and message", nil)
		return
	}
	client := db.NewClient()

	err = client.CreateMessage(messageRequest.Email, messageRequest.Message)
	if err != nil {
		app.writeJSON(w, http.StatusInternalServerError, "error writing to db", nil)
		return
	}

	response := struct {
		MessageStatus string         `json:"message_status"`
		MessageBody   models.Message `json:"message_body"`
	}{
		MessageStatus: "Message Sent",
		MessageBody:   messageRequest,
	}

	_ = app.writeJSON(w, http.StatusOK, response, nil)
}

func (app *application) readIDParam(r *http.Request) (int64, error) {
	params := httprouter.ParamsFromContext(r.Context())

	// the value returned by ByName is always a string
	// so we need to convert it to an integer of base
	// 10 with a bit size of 64
	id, err := strconv.ParseInt(params.ByName("id"), 10, 64)
	if err != nil {
		return 0, errors.New("invalid id parameter")
	}
	return id, nil
}

// Returns a string from the query string for the provided key or the provided default
func (app *application) readString(qs url.Values, key string, defaultValue string) string {
	s := qs.Get(key)
	if s == "" {
		return defaultValue
	}
	return s
}

// Returns a string[] from the query string for the provided key or the provided default
func (app *application) readCSV(qs url.Values, key string, defaultValue []string) []string {
	csv := qs.Get(key)
	if csv == "" {
		return defaultValue
	}
	return strings.Split(csv, ",")
}

func (app *application) writeJSON(w http.ResponseWriter, status int, data any, headers http.Header) error {
	// TODO - Only in development
	// MarshallIndent is convenient for terminals but has a cost
	js, err := json.MarshalIndent(data, "", "\t")
	if err != nil {
		return err
	}

	// a newline makes it easier to view in the terminal
	js = append(js, '\n')

	for key, value := range headers {
		w.Header()[key] = value
	}

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	w.Write(js)

	return nil
}

func (app *application) readJSON(w http.ResponseWriter, r *http.Request, dst any) error {
	oneMB := 1_048_576
	r.Body = http.MaxBytesReader(w, r.Body, int64(oneMB))

	dec := json.NewDecoder(r.Body)
	dec.DisallowUnknownFields()

	err := dec.Decode(dst)
	if err != nil {
		var syntaxError *json.SyntaxError
		var unmarshalTypeError *json.UnmarshalTypeError
		var invalidUnmarshalError *json.InvalidUnmarshalError

		switch {
		case errors.As(err, &syntaxError):
			return fmt.Errorf("body contains badly-formed JSON (at character %d)", syntaxError.Offset)
		case errors.Is(err, io.ErrUnexpectedEOF):
			return errors.New("body contains badly-formed JSON")
		case errors.As(err, &unmarshalTypeError):
			if unmarshalTypeError.Field != "" {
				return fmt.Errorf("body contains incorrect JSON type for field %q", unmarshalTypeError.Field)
			}
			return fmt.Errorf("body contains incorrect JSON type (at character %d)", unmarshalTypeError.Offset)
		case errors.Is(err, io.EOF):
			return errors.New("body must not be empty")
		// Something other than a non-nil pointer has likely been
		// passed to Decode. Probably a developer error.
		case errors.As(err, &invalidUnmarshalError):
			panic(err)
		default:
			return err
		}
	}

	err = dec.Decode(&struct{}{})
	if !errors.Is(err, io.EOF) {
		return errors.New("body must only contain a single JSON value")
	}

	return nil
}
