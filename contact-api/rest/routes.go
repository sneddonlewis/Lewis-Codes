package rest

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func (app *App) Routes() http.Handler {
	router := httprouter.New()
	router.HandlerFunc(http.MethodGet, "/health", app.HealthCheckHandler)
	router.HandlerFunc(http.MethodPost, "/message", app.MessageHandler)

	return router
}
