package models

import (
	"time"
)

type Usuarios struct {
	Matricula   uint      `json:"matricula" gorm:"primaryKey;autoIncrement;unique"`
	Email       string    `json:"email" gorm:"type:varchar(50);unique"`
	Senha       string    `json:"senha" gorm:"type:varchar(50)"`
	Tipo        string    `json:"tipo" gorm:"type:varchar(20)"`
	DataCriacao time.Time `json:"data_criacao" gorm:"autoCreateTime"`
}

type InformacoesUsuario struct {
	Matricula      uint      `json:"matricula" gorm:"primaryKey"`
	Nome           string    `json:"nome" gorm:"type:varchar(50)"`
	DataNascimento time.Time `json:"data_nascimento"`
	Cpf            string    `json:"cpf" gorm:"type:varchar(11);unique"`
	Telefone       int       `json:"telefone"`
	Endereco       string    `json:"endereco" gorm:"type:varchar(100)"`
}

type UsuarioRequest struct {
	Usuario            Usuarios           `json:"usuario"`
	InformacoesUsuario InformacoesUsuario `json:"informacoes_usuario"`
}

type Professores struct {
	Matricula   uint   `json:"matricula" gorm:"primaryKey;unique"`
	Formacao    string `json:"formacao" gorm:"type:varchar(50)"`
	AreaAtuacao string `json:"area_atuacao" gorm:"type:varchar(50)"`
}

type Alunos struct {
	Matricula uint `json:"matricula" gorm:"primaryKey;unique"`
	Turma     int  `json:"turma"`
}

type Coordenadores struct {
	Matricula uint `json:"matricula" gorm:"primaryKey;unique"`
}

type Turmas struct {
	Id        uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	Nome      string `json:"nome" gorm:"type:varchar(50)"`
	AnoLetivo int    `json:"ano_letivo"`
	Turno     string `json:"turno" gorm:"type:varchar(20)"`
}

type Frequencias struct {
	Id                         uint      `json:"id" gorm:"primaryKey;autoIncrement"`
	AlunoMatricula             uint      `json:"aluno_matricula"`
	ProfessorTurmaDisciplinaId uint      `json:"professor_turma_disciplina_id"`
	DataAula                   time.Time `json:"data_aula"`
	Presente                   bool      `json:"presente"`
}

type ProfessorTurmaDisciplina struct {
	ID                 uint `json:"id" gorm:"primaryKey;autoIncrement"`
	ProfessorMatricula uint `json:"professor_matricula"`
	TurmaId            uint `json:"turma_id"`
	DisciplinaId       uint `json:"disciplina_id"`
}

type Disciplinas struct {
	Id           uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	Nome         string `json:"nome" gorm:"type:varchar(50)"`
	CargaHoraria int    `json:"carga_horaria"`
}

type Notas struct {
	AlunoMatricula             uint      `json:"aluno_matricula"`
	ProfessorTurmaDisciplinaId uint      `json:"professor_turma_disciplina_id"`
	Nota                       float32   `json:"nota"`
	DataAvalaiacao             time.Time `json:"data_avaliacao"`
	TipoAvaliacacao            string    `json:"tipo_avaliacao" gorm:"type:varchar(50)"`
}
