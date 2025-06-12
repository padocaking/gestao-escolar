import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../Diretor/Turmas/TurmaDetail/TurmaDetail.style';
import Button from '../../../Components/Button';

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

const Cont = styled.div`
  max-width: 1300px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fefefe;
  border-radius: 12px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 20px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin: 20px 0;
  color: #334aa4;
`;

const DatePicker = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  text-align: left;
  padding: 12px;
  background-color: #334aa4;
  color: white;
  font-weight: 500;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ccc;
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

  &:hover {
    background-color: #2c3f91;
  }
`;

export default function Chamada() {
  const [presencas, setPresencas] = useState({});
  const [dataChamada, setDataChamada] = useState('');

  const navigate = useNavigate()
  const { id } = useParams()

  const handleToggle = (matricula) => {
    setPresencas((prev) => ({
      ...prev,
      [matricula]: !prev[matricula]
    }));
  };

  const handleSalvar = () => {
    if (!dataChamada) {
      alert('Selecione a data da chamada.');
      return;
    }

    const resultado = alunosMock.map((aluno) => ({
      ...aluno,
      presente: !!presencas[aluno.matricula]
    }));

    console.log('Data da chamada:', dataChamada);
    console.log('Presenças salvas:', resultado);
    alert(`Chamada de ${dataChamada} salva! Veja o console.`);
  };

  return (
    <Cont>

        <Container>
            <div className="back" onClick={() => navigate(`/turmas/${id}`)}>&#11164; Voltar</div>
            <div className='head-container'>
                <h1>1º Ano B</h1> 
                <span>2025 - <span className='periodo'>Manhã</span></span>
            </div>

        </Container>

      <Title>Chamada de Presença</Title>
      <DatePicker
        type="date"
        value={dataChamada}
        onChange={(e) => setDataChamada(e.target.value)}
      />
      <Table>
        <thead>
          <tr>
            <Th>Presente</Th>
            <Th>Nome</Th>
            <Th>Matrícula</Th>
          </tr>
        </thead>
        <tbody>
          {alunosMock.map((aluno) => (
            <tr key={aluno.matricula}>
              <Td>
                <input
                  type="checkbox"
                  checked={!!presencas[aluno.matricula]}
                  onChange={() => handleToggle(aluno.matricula)}
                />
              </Td>
              <Td>{aluno.nome}</Td>
              <Td>{aluno.matricula}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleSalvar}>Salvar Chamada</Button>
    </Cont>
  );
}