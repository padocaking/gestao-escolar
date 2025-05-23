CREATE DATABASE projeto;
USE projeto;

CREATE TABLE `usuarios` (
  `matricula` int UNIQUE PRIMARY KEY,
  `email` varchar(50) UNIQUE,
  `senha` varchar(50),
  `tipo` enum('aluno','professor','coordenador'),
  `data_criacao` timestamp DEFAULT CURRENT_TIMESTAMP,
  `nome` varchar(50),
  `data_nascimento` date,
  `cpf` varchar(11),
  `telefone` varchar(50),
  `endereco` varchar(100)
);

CREATE TABLE `responsavel` (
  `matricula_filho` int PRIMARY KEY,
  `nome` varchar(50),
  `data_nascimento` date,
  `cpf` varchar(11),
  `telefone` varchar(50),
  `endereco` varchar(100),
  `email` varchar(50) UNIQUE,
  `data_criacao` timestamp DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`matricula_filho`) REFERENCES `usuarios` (`matricula`)
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
  `salario` decimal(15,2),
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
