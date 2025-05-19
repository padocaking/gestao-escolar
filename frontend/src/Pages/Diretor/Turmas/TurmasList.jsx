import styled from 'styled-components';
import { RiGraduationCapLine } from "react-icons/ri";   // central
import TableRowItem from '../../../Components/TableRowItem'
import { useNavigate } from 'react-router-dom';
import { Container, BtnContainer, ButtonTwo, Table, Headers } from './Turmas.style';

export default function TurmasList () {

    const navigate = useNavigate()

    return (
        <Container>

            <h1>Turmas</h1>

            <BtnContainer>

                <ButtonTwo onClick={() => navigate('/turmas/nova-turma')}>
                    <RiGraduationCapLine />
                    <span>Adicionar Turma</span>
                </ButtonTwo>

                <ButtonTwo onClick={() => navigate('/turmas/vincular-estudante')}>
                    <RiGraduationCapLine />
                    <span>Vincular professores</span>
                </ButtonTwo>

                <ButtonTwo onClick={() => navigate('/turmas/vincular-professor')}>
                    <RiGraduationCapLine />
                    <span>Vincular alunos</span>
                </ButtonTwo>

            </BtnContainer>

            <Table>
                <thead>
                    <tr>
                        <Headers>Ano</Headers>
                        <Headers>Turma</Headers>
                        <Headers>Período</Headers>
                        <Headers>Professores/Disciplinas</Headers>
                        <Headers>Total alunos</Headers>
                        <Headers>Status Matrícula</Headers>
                        <Headers>...</Headers>
                    </tr>
                </thead>
                <tbody>
                    <TableRowItem />
                    <TableRowItem />
                    <TableRowItem />
                    <TableRowItem />
                    <TableRowItem />
                    <TableRowItem />
                    <TableRowItem />
                    <TableRowItem />
                    <TableRowItem />
                </tbody>
            </Table>

        </Container>
    )
}