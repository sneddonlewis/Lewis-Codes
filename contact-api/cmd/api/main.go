package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"contact.sneddsy.com/rest"
)

func main() {
	app := rest.App{}

	logger := log.New(os.Stdout, "", log.LstdFlags)

	srv := &http.Server{
		Addr:         fmt.Sprintf(":%d", 3000),
		Handler:      app.Routes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 10 * time.Second,
		ErrorLog:     logger,
	}

	_ = srv.ListenAndServe()
	os.Exit(1)
}
