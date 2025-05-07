package services

import (
	"backend/database"
	"backend/models"
	"backend/repository"
	"fmt"
)

func CriarUsuarioService(usuario *models.Usuarios) error {
	return repository.CriarUsuario(usuario)
}

func BuscarTodosUsuariosService(usuarios *[]models.Usuarios) error {
	return repository.BuscarTodosUsuarios(usuarios)
}

func CriarUsuarioCompletoService(req *models.UsuarioRequest) error {
	tx := database.DB.Begin()

	err := repository.CriarUsuarioCompleto(&req.Usuario, &req.InformacoesUsuario)
	if err != nil {
		tx.Rollback()
		return fmt.Errorf("erro ao criar usuário completo: %w", err)
	}

	return tx.Commit().Error
}
