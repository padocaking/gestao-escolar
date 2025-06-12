import { useState } from 'react';
import styled from 'styled-components';

const alunosMock = [
  { matricula: 2025050001, nome: 'Alice Rocha' },
  { matricula: 2025050002, nome: 'Bruno Lima' },
  { matricula: 2025050003, nome: 'Camila Nogueira' },
  { matricula: 2025050004, nome: 'Daniel Costa' },
  { matricula: 2025050005, nome: 'Eduarda Alves' },
  { matricula: 2025050006, nome: 'Felipe Moura' },
  { matricula: 2025050007, nome: 'Gabriela Martins' },
  { matricula: 2025050008, nome: 'Henrique Souza' },
  { matricula: 2025050009, nome: 'Isabela Fernandes' },
  { matricula: 2025050010, nome: 'João Pedro' },
  { matricula: 2025050011, nome: 'Karina Borges' },
  { matricula: 2025050012, nome: 'Lucas Ribeiro' },
  { matricula: 2025050013, nome: 'Mariana Teixeira' },
  { matricula: 2025050014, nome: 'Nicolas Azevedo' },
  { matricula: 2025050015, nome: 'Olívia Castro' },
];

const etapas = [
  '1º Bimestre',
  '2º Bimestre',
  'Recuperação 1',
  '3º Bimestre',
  '4º Bimestre',
  'Recuperação 2',
  'Recuperação Final'
];

const isRecuperacao = (etapa) =>
  etapa.toLowerCase().includes('recuperação');

const Container = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px #00000020;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #334aa4;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 25px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 12px;
  background-color: #334aa4;
  color: white;
  font-weight: 500;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: center;

  input {
    width: 60px;
    padding: 6px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const SaveButton = styled.button`
  background-color: #334aa4;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  float: right;
  margin-top: 20px;

  &:hover {
    background-color: #2c3f91;
  }
`;

export default function Lancamento() {
  const [etapaSelecionada, setEtapaSelecionada] = useState('');
  const [notas, setNotas] = useState({});

  const handleNotaChange = (matricula, tipo, valor) => {
    const nota = Math.min(Math.max(Number(valor), 0), 10);
    setNotas((prev) => ({
      ...prev,
      [matricula]: {
        ...prev[matricula],
        [tipo]: isNaN(nota) ? '' : nota
      }
    }));
  };

  const handleSalvar = () => {
    if (!etapaSelecionada) {
      alert('Selecione uma etapa antes de salvar.');
      return;
    }

    const resultado = alunosMock.map((aluno) => ({
      ...aluno,
      etapa: etapaSelecionada,
      notas: notas[aluno.matricula] || {}
    }));

    console.log(`Notas lançadas para ${etapaSelecionada}:`, resultado);
    alert(`Notas do ${etapaSelecionada} salvas! Veja o console.`);
  };

  const renderCamposNota = (aluno) => {
    const dados = notas[aluno.matricula] || {};
    if (isRecuperacao(etapaSelecionada)) {
      return (
        <Td colSpan="4">
          <input
            type="number"
            min="0"
            max="10"
            value={dados.prova || ''}
            onChange={(e) =>
              handleNotaChange(aluno.matricula, 'prova', e.target.value)
            }
          />
        </Td>
      );
    } else {
      return (
        <>
          <Td>
            <input
              type="number"
              min="0"
              max="10"
              value={dados.prova1 || ''}
              onChange={(e) =>
                handleNotaChange(aluno.matricula, 'prova1', e.target.value)
              }
            />
          </Td>
          <Td>
            <input
              type="number"
              min="0"
              max="10"
              value={dados.prova2 || ''}
              onChange={(e) =>
                handleNotaChange(aluno.matricula, 'prova2', e.target.value)
              }
            />
          </Td>
          <Td>
            <input
              type="number"
              min="0"
              max="10"
              value={dados.atividade || ''}
              onChange={(e) =>
                handleNotaChange(aluno.matricula, 'atividade', e.target.value)
              }
            />
          </Td>
          <Td>
            <input
              type="number"
              min="0"
              max="10"
              value={dados.trabalho || ''}
              onChange={(e) =>
                handleNotaChange(aluno.matricula, 'trabalho', e.target.value)
              }
            />
          </Td>
        </>
      );
    }
  };

  return (
    <Container>
      <Title>Lançamento de Notas</Title>

      <Select
        value={etapaSelecionada}
        onChange={(e) => setEtapaSelecionada(e.target.value)}
      >
        <option value="">Selecione a etapa</option>
        {etapas.map((etapa, index) => (
          <option key={index} value={etapa}>
            {etapa}
          </option>
        ))}
      </Select>

      <Table>
        <thead>
          <tr>
            <Th>Nome</Th>
            {isRecuperacao(etapaSelecionada) ? (
              <Th colSpan="4">Nota da Prova</Th>
            ) : (
              <>
                <Th>Prova 1</Th>
                <Th>Prova 2</Th>
                <Th>Atividade</Th>
                <Th>Trabalho</Th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {alunosMock.map((aluno) => (
            <tr key={aluno.matricula}>
              <Td>{aluno.nome}</Td>
              {renderCamposNota(aluno)}
            </tr>
          ))}
        </tbody>
      </Table>

      <SaveButton onClick={handleSalvar}>Salvar Notas</SaveButton>
    </Container>
  );
}