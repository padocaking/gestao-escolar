CREATE DATABASE projeto;
USE projeto;

CREATE TABLE `usuarios` (
  `matricula` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(50) UNIQUE,
  `senha` varchar(50),
  `tipo` enum("aluno","professor","coordenador"),
  `data_criacao` timestamp
);

CREATE TABLE `alunos` (
  `matricula` int UNIQUE PRIMARY KEY AUTO_INCREMENT,
  `turma` int
);

CREATE TABLE `professores` (
  `matricula` int PRIMARY KEY AUTO_INCREMENT,
  `formacao` varchar(50),
  `area_atuacao` varchar(50)
);

CREATE TABLE `coordenadores` (
  `matricula` int PRIMARY KEY AUTO_INCREMENT,
);

CREATE TABLE `turmas` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nome` varchar(50),
  `ano_letivo` int,
  `turno` varchar(20)
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
  `disciplina_id` int
);

CREATE TABLE `notas` (
  `aluno_matricula` int PRIMARY KEY AUTO_INCREMENT,
  `professor_turma_disciplina_id` int,
  `nota` decimal(2,2),
  `data_avaliacao` date,
  `tipo_avaliacao` varchar(50)
);

CREATE TABLE `frequencias` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `aluno_matricula` int,
  `professor_turma_disciplina_id` int,
  `data_aula` date,
  `presente` boolean
);

CREATE TABLE `informacao_usuario` (
  `matricula` int PRIMARY KEY,
  `nome` varchar(50),
  `data_nascimento` date,
  `cpf` int,
  `telefone` int,
  `endereco` varchar(100)
);

ALTER TABLE `alunos` ADD FOREIGN KEY (`matricula`) REFERENCES `usuarios` (`matricula`);

ALTER TABLE `alunos` ADD FOREIGN KEY (`turma`) REFERENCES `turmas` (`id`);

ALTER TABLE `professores` ADD FOREIGN KEY (`matricula`) REFERENCES `usuarios` (`matricula`);

ALTER TABLE `coordenadores` ADD FOREIGN KEY (`matricula`) REFERENCES `usuarios` (`matricula`);

ALTER TABLE `professor_turma_disciplina` ADD FOREIGN KEY (`professor_matricula`) REFERENCES `professores` (`matricula`);

ALTER TABLE `professor_turma_disciplina` ADD FOREIGN KEY (`turma_id`) REFERENCES `turmas` (`id`);

ALTER TABLE `professor_turma_disciplina` ADD FOREIGN KEY (`disciplina_id`) REFERENCES `disciplinas` (`id`);

ALTER TABLE `notas` ADD FOREIGN KEY (`aluno_matricula`) REFERENCES `alunos` (`matricula`);

ALTER TABLE `notas` ADD FOREIGN KEY (`professor_turma_disciplina_id`) REFERENCES `professor_turma_disciplina` (`id`);

ALTER TABLE `frequencias` ADD FOREIGN KEY (`aluno_matricula`) REFERENCES `alunos` (`matricula`);

ALTER TABLE `frequencias` ADD FOREIGN KEY (`professor_turma_disciplina_id`) REFERENCES `professor_turma_disciplina` (`id`);

ALTER TABLE `informacao_usuario` ADD FOREIGN KEY (`matricula`) REFERENCES `usuarios` (`matricula`);
