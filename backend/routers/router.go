package routers

import (
	"backend/controllers"

	"github.com/gofiber/fiber/v2"
)

// //go:embed front/dist/*
//var staticFiles embed.FS

// SetupRoutes configura as rotas da API
func SetupRoutes(app *fiber.App) {
	//	distFS, _ := fs.Sub(staticFiles, "front/dist")

	//	app.Use("/", filesystem.New(filesystem.Config{
	//		Root:         http.FS(distFS),
	//		Browse:       false,
	//		MaxAge:       3600,
	//		NotFoundFile: "index.html",
	//	}))

	api := app.Group("/api")

	usuario := api.Group("/usuarios")

	api.Get("/batata", func(c *fiber.Ctx) error {
		return c.SendString("Batata!")
	})

	usuario.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("usuario")
	})

	usuario.Post("/", controllers.CriarUsuario)

}
