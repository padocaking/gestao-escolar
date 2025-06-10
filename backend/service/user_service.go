package service

import (
	"backend/middleware"
	"backend/models"
	"backend/repository"
	"context"
	"errors"
	"log"
)

type UserService interface {
	GetUserByID(ctx context.Context, id uint) (*models.Usuarios, error)
	CreateUser(ctx context.Context, usuario *models.Usuarios) (*models.Usuarios, error)
	GetAllUsers(ctx context.Context) ([]models.Usuarios, error)
	GetUserByMatricula(ctx context.Context, matricula string) (*models.Usuarios, error)
}

type userService struct {
	repo repository.UserRepository
}

func NewUserService(repo repository.UserRepository) UserService {
	return &userService{repo: repo}
}

func (s *userService) GetUserByID(ctx context.Context, id uint) (*models.Usuarios, error) {
	return s.repo.GetByID(ctx, id)
}

func (s *userService) CreateUser(ctx context.Context, usuario *models.Usuarios) (*models.Usuarios, error) {
	log.Println("[INFO] Validando dados do usuário")

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

	log.Printf("[DEBUG] Dados validados: %+v\n", usuario)

	err := s.repo.Create(ctx, usuario)
	if err != nil {
		log.Println("[ERROR] Erro ao salvar no banco de dados:", err)
		return nil, errors.New("erro ao criar usuário: " + err.Error())
	}

	log.Println("[INFO] Usuário criado com sucesso no banco de dados")
	return usuario, nil
}

func (s *userService) GetAllUsers(ctx context.Context) ([]models.Usuarios, error) {
	log.Println("[INFO] Buscando todos os usuários")
	return s.repo.ListAll(ctx)
}

func (s *userService) GetUserByMatricula(ctx context.Context, matricula string) (*models.Usuarios, error) {
	log.Printf("[INFO] Buscando usuário por Matricula: %s\n", matricula)
	usuario, err := s.repo.GetByMatricula(ctx, matricula)
	if err != nil {
		log.Println("[ERROR] Erro ao buscar usuário:", err)
		return nil, errors.New("usuário não encontrado")
	}
	return usuario, nil
}

// ----------------- LoginService -----------------

type LoginService struct {
	userRepo repository.UserRepository
}

func NewLoginService(userRepo repository.UserRepository) *LoginService {
	return &LoginService{userRepo: userRepo}
}

// req tem Matricula e Senha
func (s *LoginService) Login(req *models.RequisicaoLogin) (string, error) {
	usuario, err := s.userRepo.GetByMatricula(context.Background(), req.Matricula)
	if err != nil {
		return "", errors.New("usuário ou senha inválidos")
	}

	if usuario.Senha == nil || *usuario.Senha != req.Senha {
		return "", errors.New("usuário ou senha inválidos")
	}

	token, err := middleware.GerarToken(usuario)
	if err != nil {
		return "", errors.New("erro ao gerar token")
	}

	return token, nil
}
