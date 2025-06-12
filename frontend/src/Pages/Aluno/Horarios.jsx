import React from 'react';
import styled from 'styled-components';
import { Title } from '../../Styles/GlobalStyle';
import Button from '../../Components/Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    span {
        &.printer {
            font-size: 20px;
        }
    }

    button {
        margin: 0 auto;
        margin-top: 30px;
        margin-bottom: 30px;
        width: 300px;
    }
`

const GradeContainer = styled.div`
  width: 100%;
  max-width: 900px;
  border: 1px solid #ccc;
  border-collapse: collapse;
  font-family: sans-serif;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderCell = styled.th`
  background-color: var(--main-one);
  color: white;
  padding: 12px;
  text-align: center;
  font-size: 16px;
`;

const Cell = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  height: 60px;
  text-align: center;
  background-color: #f9f9f9;
  font-size: 15px;
`;

const TimeCell = styled.td`
  background-color: #e6e6e6;
  font-weight: 600;
  text-align: center;
`;

const RecreioCell = styled.tr`
  td {
    padding: 12px;
    background-color: #334aa4d1;
    color: var(--white);
    text-align: center;
    font-weight: bold;
    border-top: 2px solid #334aa4;
    border-bottom: 2px solid #334aa4;
  }
`;

const periods = [
  '07:30 - 08:20',
  '08:20 - 09:10',
  '09:30 - 10:20',
  '10:20 - 11:10',
  '11:10 - 12:00',
];

const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

const exampleSchedule = [
  ['Matemática', 'Português', 'História', 'Educação Física', 'Inglês'],
  ['Química', 'Geografia', 'Matemática', 'Física', 'Biologia'],
  ['Redação', 'Português', 'Inglês', 'História', 'Filosofia'],
  ['Matemática', 'Química', 'Geografia', 'Educação Física', 'Redação'],
  ['Biologia', 'Física', 'Português', 'História', 'Artes'],
];

export default function GradeHorarios() {
  return (
    <Container>
        <Title>Grade de horários</Title>
        <GradeContainer>
        <Table>
            <thead>
            <tr>
                <HeaderCell>Horário</HeaderCell>
                {weekDays.map((day) => (
                <HeaderCell key={day}>{day}</HeaderCell>
                ))}
            </tr>
            </thead>
            <tbody>
            {periods.map((period, index) => {
                if (index === 2) {
                return (
                    <React.Fragment key={index}>
                    <RecreioCell>
                        <td colSpan={6}>🧃 Recreio / Intervalo</td>
                    </RecreioCell>
                    <tr>
                        <TimeCell>{period}</TimeCell>
                        {weekDays.map((_, dayIndex) => (
                        <Cell key={dayIndex}>
                            {exampleSchedule[dayIndex][index] || '-'}
                        </Cell>
                        ))}
                    </tr>
                    </React.Fragment>
                );
                }

                return (
                <tr key={index}>
                    <TimeCell>{period}</TimeCell>
                    {weekDays.map((_, dayIndex) => (
                    <Cell key={dayIndex}>
                        {exampleSchedule[dayIndex][index] || '-'}
                    </Cell>
                    ))}
                </tr>
                );
            })}
            </tbody>
        </Table>
        </GradeContainer>
        <Button className='center'><span className="printer">🖨️</span>Imprimir grade de horários</Button>
    </Container>
  );
}