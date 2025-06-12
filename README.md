# Sistema de Gestão Educacional 📚

Sistema web desenvolvido para facilitar a administração de instituições de ensino, automatizando processos acadêmicos e administrativos como cadastros, controle de turmas, lançamento de notas e frequências.

## 🧑‍💻 Equipe de Desenvolvimento

- Guilherme Dugonski – Modelagem e persistência de dados e desenvolvedor fullstack
- Logan Gonçalves de Ramos – Back-end em Go
- Lucas Henrique Cardoso – Front-end com React
- Matheus Shigueyuki Luchtenberg Morita – Front-end, documentação, testes e wireframes

## 📌 Objetivo

Desenvolver uma aplicação moderna, eficiente e escalável para gerenciar dados escolares, permitindo o cadastro de alunos, professores, turmas, disciplinas, notas e frequências com segurança, usabilidade e responsividade.

## ⚙️ Tecnologias Utilizadas

- **Back-End:** Go (Golang)
- **Front-End:** React
- **Banco de Dados:** SQL (relacional)
- **Versionamento:** Git e GitHub
- **Design de Interfaces:** Figma
- **Deploy:** Compilação binária multiplataforma

## 🧱 Arquitetura

A aplicação segue o padrão de arquitetura em três camadas:

1. **Camada de Apresentação (Front-end):** Interface interativa e responsiva para diferentes perfis de usuário (Aluno, Professor e Administrador).
2. **Camada de Lógica de Negócio (Back-end):** APIs RESTful com autenticação via JWT.
3. **Camada de Persistência:** Banco de dados relacional com modelagem em SQL baseada em entidades como `Alunos`, `Professores`, `Turmas`, `Disciplinas`, `Notas` e `Frequências`.

## 📐 Wireframes

Os wireframes foram criados com o Figma e representam telas como:

- Login
- Boletim do aluno
- Calendário acadêmico
- Gestão de turmas e disciplinas
- Lançamento de notas e presenças

## 🚀 Instalação e Execução

### Pré-requisitos

- Go instalado
- React (Node.js/NPM)
- Banco de dados relacional (MySQL, PostgreSQL, etc.)

### Compilação do back-end

```bash
# Linux
go build -o gestao-escolar

# Windows
GOOS=windows GOARCH=amd64 go build -o gestao-escolar.exe
```

### Execução

#### Back-End (Go)

```bash
# Compilação
GOOS=windows GOARCH=amd64 go build -o gestao-escolar.exe

# Execução (Windows)
gestao-escolar.exe
```

#### Banco de Dados (MySQL/PostgreSQL)

Certifique-se de ter um banco de dados relacional em execução (como MySQL ou PostgreSQL). Exemplo para MySQL:

#### Front-End (React)

```bash
# Instalar dependências
npm install

# Rodar localmente
npm start
```

> Certifique-se de configurar as variáveis de ambiente e conexão com o banco de dados.

## 🔐 Autenticação

- JWT Token
- Rotas protegidas por perfil de usuário

## 💰 Custo Estimado

| Item                                | Horas | Valor Hora (R$) | Custo (R$) |
|-------------------------------------|--------|------------------|------------|
| Front-End (React)                   | 40     | 80,00            | 3.200,00   |
| Back-End (Go)                       | 35     | 80,00            | 2.800,00   |
| Banco de Dados (SQL)               | 10     | 80,00            | 800,00     |
| Design de Interface (Figma)        | 5      | 70,00            | 350,00     |
| Testes Funcionais e Usabilidade     | 5      | 60,00            | 300,00     |
| Manutenção (6 meses)               | —      | —                | 2.400,00   |
| Infraestrutura - Servidor          | —      | —                | 1.500,00   |
| Infraestrutura - Banco de Dados    | —      | —                | 600,00     |
| Domínio e Certificado SSL          | —      | —                | 200,00     |
| **Subtotal**                        |        |                  | **8.550,00** |
| **Lucro (50%)**                     |        |                  | **4.275,00** |
| **Total Estimado**                 |        |                  | **12.825,00** |
