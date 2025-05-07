package main

import (
	"backend/database"
	"backend/routers"

	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func InitLogger() {
	// Inicia um logger para imprimir no terminal
	log.SetOutput(os.Stdout)
	log.SetFlags(log.LstdFlags) // Para exibir a data/hora junto
}

func main() {

	InitLogger()
	log.Println("Iniciando a conexão com o banco de dados...")
	database.Connect()
	log.Println("Banco de dados conectado com sucesso!")

	app := fiber.New()

	// Configuração de CORS
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowMethods: "GET,POST,PUT,DELETE,OPTIONS",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	routers.SetupRoutes(app)
	log.Println("Rotas da API configuradas.")

	log.Println("Servidor rodando na porta 3000...")
	app.Listen(":3000")
}
