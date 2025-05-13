package services

import (
	"backend/models"
	"backend/repository"
	"errors"
	"log"
)

func CriarUsuario(usuario *models.Usuarios) (*models.Usuarios, error) {
	log.Println("[INFO] Validando dados do usuário")

	// Verifica se os campos obrigatórios estão preenchidos
	if usuario.Nome == "" {
		log.Println("[WARN] Campo 'Nome' é obrigatório")
		return nil, errors.New("campo 'Nome' é obrigatório")
	}
	if usuario.Email == "" {
		log.Println("[WARN] Campo 'Email' é obrigatório")
		return nil, errors.New("campo 'Email' é obrigatório")
	}
	if usuario.Tipo == "" {
		log.Println("[WARN] Campo 'Tipo' é obrigatório")
		return nil, errors.New("campo 'Tipo' é obrigatório")
	}
	if usuario.Cpf == "" {
		log.Println("[WARN] Campo 'Cpf' é obrigatório")
		return nil, errors.New("campo 'Cpf' é obrigatório")
	}
	if usuario.Endereco == "" {
		log.Println("[WARN] Campo 'Endereco' é obrigatório")
		return nil, errors.New("campo 'Endereco' é obrigatório")
	}
	if usuario.DataNascimento.IsZero() {
		log.Println("[WARN] Campo 'DataNascimento' é obrigatório")
		return nil, errors.New("campo 'DataNascimento' é obrigatório")
	}

	// Logando os dados validados
	log.Printf("[DEBUG] Dados validados: %+v\n", usuario)

	// Tenta salvar o usuário no banco de dados
	err := repository.CriarUsuario(usuario)
	if err != nil {
		log.Println("[ERROR] Erro ao salvar no banco de dados:", err)
		return nil, errors.New("erro ao criar usuário: " + err.Error())
	}

	// Sucesso
	log.Println("[INFO] Usuário criado com sucesso no banco de dados")
	return usuario, nil
}
