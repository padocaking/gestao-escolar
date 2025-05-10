CREATE DATABASE projeto;
USE projeto;

CREATE TABLE `usuarios` (
  `matricula` int PRIMARY KEY CHECK (matricula BETWEEN 0 AND 99999999),
  `email` varchar(50) UNIQUE,
  `senha` varchar(50),
  `tipo` enum('aluno','professor','coordenador'),
  `data_criacao` timestamp
);

CREATE TABLE `turmas` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(50),
  `ano_letivo` int,
  `turno` varchar(20)
);

CREATE TABLE `alunos` (
  `matricula` int UNIQUE PRIMARY KEY,
  `turma` int,
  FOREIGN KEY (`matricula`) REFERENCES `usuarios` (`matricula`),
  FOREIGN KEY (`turma`) REFERENCES `turmas` (`id`)
);

CREATE TABLE `professores` (
  `matricula` int PRIMARY KEY,
  `formacao` varchar(50),
  `area_atuacao` varchar(50),
  FOREIGN KEY (`matricula`) REFERENCES `usuarios` (`matricula`)
);

CREATE TABLE `coordenadores` (
  `matricula` int PRIMARY KEY,
  FOREIGN KEY (`matricula`) REFERENCES `usuarios` (`matricula`)
);

CREATE TABLE `disciplinas` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(50),
  `carga_horaria` int
);

CREATE TABLE `professor_turma_disciplina` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `professor_matricula` int,
  `turma_id` int,
  `disciplina_id` int,
  FOREIGN KEY (`professor_matricula`) REFERENCES `professores` (`matricula`),
  FOREIGN KEY (`turma_id`) REFERENCES `turmas` (`id`),
  FOREIGN KEY (`disciplina_id`) REFERENCES `disciplinas` (`id`)
);

CREATE TABLE `notas` (
  `aluno_matricula` int PRIMARY KEY,
  `professor_turma_disciplina_id` int,
  `nota` decimal(5 ,2),
  `data_avaliacao` date,
  `tipo_avaliacao` varchar(50),
  FOREIGN KEY (`aluno_matricula`) REFERENCES `alunos` (`matricula`),
  FOREIGN KEY (`professor_turma_disciplina_id`) REFERENCES `professor_turma_disciplina` (`id`)
);

CREATE TABLE `frequencias` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `aluno_matricula` int,
  `professor_turma_disciplina_id` int,
  `data_aula` date,
  `presente` boolean,
  FOREIGN KEY (`aluno_matricula`) REFERENCES `alunos` (`matricula`),
  FOREIGN KEY (`professor_turma_disciplina_id`) REFERENCES `professor_turma_disciplina` (`id`)
);

CREATE TABLE `informacao_usuario` (
  `matricula` int PRIMARY KEY,
  `nome` varchar(50),
  `data_nascimento` date,
  `cpf` varchar(11),
  `telefone` varchar(50),
  `endereco` varchar(100),
  FOREIGN KEY (`matricula`) REFERENCES `usuarios` (`matricula`)
);