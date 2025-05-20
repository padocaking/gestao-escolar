package models

import (
	"time"
)

type Usuarios struct {
	Matricula      uint      `json:"matricula" gorm:"primaryKey;unique"`
	Email          string    `json:"email" gorm:"type:varchar(50);unique"`
	Senha          string    `json:"senha" gorm:"type:varchar(50)"`
	Tipo           string    `json:"tipo" gorm:"type:varchar(20)"`
	DataNascimento time.Time `json:"data_nascimento"`
	DataCriacao    time.Time `json:"data_criacao" gorm:"autoCreateTime"`
	Nome           string    `json:"nome" gorm:"type:varchar(50)"`
	Cpf            string    `json:"cpf" gorm:"type:varchar(11);unique"`
	Telefone       string    `json:"telefone"`
	Endereco       string    `json:"endereco" gorm:"type:varchar(100)"`
}

type Alunos struct {
	Matricula uint `json:"matricula" gorm:"primaryKey;unique"`
	Turma     int  `json:"turma"`
}

type Professores struct {
	Matricula   uint   `json:"matricula" gorm:"primaryKey;unique"`
	Formacao    string `json:"formacao" gorm:"type:varchar(50)"`
	AreaAtuacao string `json:"area_atuacao" gorm:"type:varchar(50)"`
	Salario     int    `json:"salario" gorm:"type:decimal(15,2)"`
}

type Coordenadores struct {
	Matricula uint `json:"matricula" gorm:"primaryKey;unique"`
}

type RequisicaoLogin struct {
	Matricula uint   `json:"matricula"`
	Senha     string `json:"senha"`
}
