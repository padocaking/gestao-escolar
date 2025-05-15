import styled from 'styled-components';
import { RiGraduationCapLine } from "react-icons/ri";   // central

const Container = styled.div`

    h1 {
        color: var(--black);
        font-size: 48px;
        padding-bottom: 2rem;
    }
`

const BtnContainer = styled.div`
    display: flex;
    gap: 10px;
`

const ButtonTwo = styled.button`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    color: var(--black);
    background-color: var(--white);
    border: none;
    padding: 1rem 0 1rem 1.25rem;
    width: 250px;
    cursor: pointer;

    svg {
    }

    span {
        font-size: 16px;
        font-weight: 600;
    }
`

const Table = styled.table`
    border-collapse: collapse;
    margin: 25px 0;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;

    thead tr {
        background-color: var(--main-two);
        color: var(--white);
        text-align: left;
        font-weight: 800;
    }

    th, td {
        padding: 18px 21px;
    }

    tbody tr {
        border-bottom: 1px solid #bbbbbb;
        background-color: var(--white);
    }

    tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    tbody tr:last-of-type {
        border-bottom: 2px solid var(--main-two);
    }

    .tableCenter {
        text-align: center;
    }
`

export default function Turmas () {
    return (
        <Container>

            <h1>Turmas</h1>

            <BtnContainer>

                <ButtonTwo>
                    <RiGraduationCapLine />
                    <span>Adicionar Turma</span>
                </ButtonTwo>

                <ButtonTwo>
                    <RiGraduationCapLine />
                    <span>Vincular professores</span>
                </ButtonTwo>

                <ButtonTwo>
                    <RiGraduationCapLine />
                    <span>Vincular alunos</span>
                </ButtonTwo>

            </BtnContainer>

            <Table>
                <thead>
                    <tr>
                        <th>Ano</th>
                        <th>Turma</th>
                        <th>Período</th>
                        <th>Professores/Disciplinas</th>
                        <th>Total alunos</th>
                        <th>Status Matrícula</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>5º Ano</td>
                        <td>A</td>
                        <td>Manhã</td>
                        <td className='tableCenter'>6/6</td>
                        <td>22</td>
                        <td>Aberto</td>
                        <td>
                            <div>
                                <span>edit</span>
                                <span>del</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5º Ano</td>
                        <td>A</td>
                        <td>Manhã</td>
                        <td className='tableCenter'>6/6</td>
                        <td>22</td>
                        <td>Aberto</td>
                        <td>
                            <div>
                                <span>edit</span>
                                <span>del</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5º Ano</td>
                        <td>A</td>
                        <td>Manhã</td>
                        <td className='tableCenter'>6/6</td>
                        <td>22</td>
                        <td>Aberto</td>
                        <td>
                            <div>
                                <span>edit</span>
                                <span>del</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5º Ano</td>
                        <td>A</td>
                        <td>Manhã</td>
                        <td className='tableCenter'>6/6</td>
                        <td>22</td>
                        <td>Aberto</td>
                        <td>
                            <div>
                                <span>edit</span>
                                <span>del</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </Container>
    )
}