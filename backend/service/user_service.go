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
	CreateUserGeral(ctx context.Context, usuario *models.UsuarioGeral) (*models.UsuarioGeral, error)
	GetAllUsers(ctx context.Context) ([]models.Usuarios, error)
	GetUserByMatricula(ctx context.Context, matricula string) (*models.Usuarios, error)
	GetUserByMatriculaAluno(ctx context.Context, matricula string) (*models.Alunos, error)
	GetUserByMatriculaProfessor(ctx context.Context, matricula string) (*models.Professores, error)
	GetUserByMatriculaCoordenador(ctx context.Context, matricula string) (*models.Coordenadores, error)
	GetUsersByTipo(ctx context.Context, tipo string) ([]models.Usuarios, error)

	AtualizarAluno(ctx context.Context, matricula uint, dados *models.Alunos) error
	DeletarAluno(ctx context.Context, matricula uint) error

	AtualizarProfessor(ctx context.Context, matricula uint, dados *models.Professores) error
	DeletarProfessor(ctx context.Context, matricula uint) error

	AtualizarCoordenador(ctx context.Context, matricula uint, dados *models.Coordenadores) error
	DeletarCoordenador(ctx context.Context, matricula uint) error
}

type userService struct {
	repo repository.UserRepository
}

func NewUserService(repo repository.UserRepository) UserService {
	return &userService{repo: repo}
}

// #################################
//
//
// AREA GERAL
//
//
// #################################

func (s *userService) GetUserByID(ctx context.Context, id uint) (*models.Usuarios, error) {
	return s.repo.GetByID(ctx, id)
}
func (s *userService) CreateUserGeral(ctx context.Context, usuario *models.UsuarioGeral) (*models.UsuarioGeral, error) {
	log.Println("[INFO] Validando dados do usuário")

	if usuario.Nome == nil || *usuario.Nome == "" {
		log.Println("[WARN] Campo 'Nome' é obrigatório")
		return nil, errors.New("campo 'Nome' é obrigatório")
	}
	if usuario.Email == nil || *usuario.Email == "" {
		log.Println("[WARN] Campo 'Email' é obrigatório")
		return nil, errors.New("campo 'Email' é obrigatório")
	}
	if usuario.Tipo == nil || *usuario.Tipo == "" {
		log.Println("[WARN] Campo 'Tipo' é obrigatório")
		return nil, errors.New("campo 'Tipo' é obrigatório")
	}
	if usuario.Cpf == nil || *usuario.Cpf == "" {
		log.Println("[WARN] Campo 'Cpf' é obrigatório")
		return nil, errors.New("campo 'Cpf' é obrigatório")
	}
	if usuario.Endereco == nil || *usuario.Endereco == "" {
		log.Println("[WARN] Campo 'Endereco' é obrigatório")
		return nil, errors.New("campo 'Endereco' é obrigatório")
	}
	if usuario.DataNascimento == nil || usuario.DataNascimento.IsZero() {
		log.Println("[WARN] Campo 'DataNascimento' é obrigatório")
		return nil, errors.New("campo 'DataNascimento' é obrigatório")
	}

	log.Printf("[DEBUG] Dados validados: %+v\n", usuario)

	err := s.repo.CreateUser(ctx, usuario)
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

func (s *userService) GetUsersByTipo(ctx context.Context, tipo string) ([]models.Usuarios, error) {
	log.Printf("[INFO] Buscando usuários do tipo: %s\n", tipo)

	usuarios, err := s.repo.GetAllByTipo(ctx, tipo)
	if err != nil {
		log.Println("[ERROR] Erro ao buscar usuários:", err)
		return nil, errors.New("erro ao buscar usuários")
	}
	if len(usuarios) == 0 {
		log.Printf("[INFO] Nenhum usuário encontrado com tipo: %s\n", tipo)
		return nil, errors.New("nenhum usuário encontrado")
	}

	return usuarios, nil
}

// #################################
//
// # AREA ALUNO
//
// #################################

func (s *userService) GetUserByMatriculaAluno(ctx context.Context, matricula string) (*models.Alunos, error) {
	log.Printf("[INFO] Buscando usuário por Matricula: %s\n", matricula)
	usuario, err := s.repo.GetByMatriculaAluno(ctx, matricula)
	if err != nil {
		log.Println("[ERROR] Erro ao buscar usuário:", err)
		return nil, errors.New("usuário não encontrado")
	}
	return usuario, nil
}

func (s *userService) AtualizarAluno(ctx context.Context, matricula uint, dados *models.Alunos) error {
	log.Printf("[INFO] Atualizando aluno com matrícula: %d", matricula)

	if dados == nil {
		return errors.New("dados de atualização não podem ser nulos")
	}

	err := s.repo.UpdateAluno(ctx, matricula, dados)
	if err != nil {
		log.Printf("[ERROR] Erro ao atualizar aluno: %v", err)
		return err
	}

	log.Println("[INFO] Aluno atualizado com sucesso")
	return nil
}

// Deletar aluno por matrícula
func (s *userService) DeletarAluno(ctx context.Context, matricula uint) error {
	log.Printf("[INFO] Deletando aluno com matrícula: %d", matricula)

	err := s.repo.DeleteAluno(ctx, matricula)
	if err != nil {
		log.Printf("[ERROR] Erro ao deletar aluno: %v", err)
		return err
	}

	log.Println("[INFO] Aluno deletado com sucesso")
	return nil
}

// #################################
//
//
// AREA PROFESSOR
//
//
// #################################

func (s *userService) GetUserByMatriculaProfessor(ctx context.Context, matricula string) (*models.Professores, error) {
	log.Printf("[INFO] Buscando usuário por Matricula: %s\n", matricula)
	usuario, err := s.repo.GetByMatriculaProfesor(ctx, matricula)
	if err != nil {
		log.Println("[ERROR] Erro ao buscar usuário:", err)
		return nil, errors.New("usuário não encontrado")
	}
	return usuario, nil
}

func (s *userService) AtualizarProfessor(ctx context.Context, matricula uint, dados *models.Professores) error {
	log.Printf("[INFO] Atualizando Professor com matrícula: %d", matricula)

	if dados == nil {
		return errors.New("dados de atualização não podem ser nulos")
	}

	err := s.repo.UpdateProfessor(ctx, matricula, dados)
	if err != nil {
		log.Printf("[ERROR] Erro ao atualizar Professor: %v", err)
		return err
	}

	log.Println("[INFO] Professor atualizado com sucesso")
	return nil
}

// Deletar Professor por matrícula
func (s *userService) DeletarProfessor(ctx context.Context, matricula uint) error {
	log.Printf("[INFO] Deletando Professor com matrícula: %d", matricula)

	err := s.repo.DeleteProfessor(ctx, matricula)
	if err != nil {
		log.Printf("[ERROR] Erro ao deletar Professor: %v", err)
		return err
	}

	log.Println("[INFO] Professor deletado com sucesso")
	return nil
}

// #################################
//
//
// AREA COORDENADOR
//
//
// #################################

func (s *userService) GetUserByMatriculaCoordenador(ctx context.Context, matricula string) (*models.Coordenadores, error) {
	log.Printf("[INFO] Buscando usuário por Matricula: %s\n", matricula)
	usuario, err := s.repo.GetByMatriculaCoordenador(ctx, matricula)
	if err != nil {
		log.Println("[ERROR] Erro ao buscar usuário:", err)
		return nil, errors.New("usuário não encontrado")
	}
	return usuario, nil
}
func (s *userService) AtualizarCoordenador(ctx context.Context, matricula uint, dados *models.Coordenadores) error {
	log.Printf("[INFO] Atualizando Coordenador com matrícula: %d", matricula)

	if dados == nil {
		return errors.New("dados de atualização não podem ser nulos")
	}

	err := s.repo.UpdateCoordenador(ctx, matricula, dados)
	if err != nil {
		log.Printf("[ERROR] Erro ao atualizar Coordenador: %v", err)
		return err
	}

	log.Println("[INFO] Coordenador atualizado com sucesso")
	return nil
}

// Deletar Professor por matrícula
func (s *userService) DeletarCoordenador(ctx context.Context, matricula uint) error {
	log.Printf("[INFO] Deletando Coordenador com matrícula: %d", matricula)

	err := s.repo.DeleteCoordenador(ctx, matricula)
	if err != nil {
		log.Printf("[ERROR] Erro ao deletar Coordenador: %v", err)
		return err
	}

	log.Println("[INFO] Coordenador deletado com sucesso")
	return nil
}

// #################################
//
//
// AREA LOGIN
//
//
// #################################

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

	if usuario.Senha == nil || *usuario.Senha != *req.Senha {
		return "", errors.New("usuário ou senha inválidos")
	}

	token, err := middleware.GerarToken(usuario)
	if err != nil {
		return "", errors.New("erro ao gerar token")
	}

	return token, nil
}

// #################################
//
//
// AREA UTILITARIOS
//
//
// #################################
