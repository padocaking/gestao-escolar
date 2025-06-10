package router

import (
	"backend/config"
	"backend/handler"
	"backend/middleware"
	"backend/models"
	"backend/repository"
	"backend/service"

	"github.com/go-chi/chi/v5"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func NewRouter(cfg *config.Config) *chi.Mux {
	r := chi.NewRouter()

	r.Use(middleware.Logger)

	// Conecta no banco
	db, err := gorm.Open(mysql.Open(cfg.DBDSN), &gorm.Config{})
	if err != nil {
		panic("Falha ao conectar ao banco: " + err.Error())
	}

	// Auto migrate
	db.AutoMigrate(&models.Usuarios{})

	// Injeta dependências
	userRepo := repository.NewUserRepository(db)
	userService := service.NewUserService(userRepo)
	loginService := service.NewLoginService(userRepo)
	userHandler := handler.NewUserHandler(userService, loginService)

	// Rotas
	r.Post("/login", userHandler.LoginHandler)

	// Subrouter protegido por JWT
	r.Group(func(r chi.Router) {
		r.Use(middleware.Autenticar) // aqui seu middleware JWT que valida o token

		r.Get("/users/{id}", userHandler.GetUser)
		r.Post("/users", userHandler.CriarUsuario)
		r.Get("/users", userHandler.ListarUsuarios)
		r.Get("/users/matricula/{matricula}", userHandler.ObterUsuarioPorMatricula)
	})

	return r
}
