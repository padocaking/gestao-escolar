package main

import (
	"log"
	"net/http"

	"backend/config"
	"backend/router"
)

func main() {
	cfg, err := config.LoadConfig()
	if err != nil {
		log.Fatalf("Erro ao carregar config: %v", err)
	}

	r := router.NewRouter(cfg)

	log.Println("Servidor rodando em", cfg.ServerAddress)
	http.ListenAndServe(cfg.ServerAddress, r)
}
