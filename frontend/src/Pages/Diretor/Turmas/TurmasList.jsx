import styled from 'styled-components';
import { RiGraduationCapLine } from "react-icons/ri";   // central
import TableRowItem from '../../../Components/TableRowItem'
import { useNavigate } from 'react-router-dom';
import { BtnContainer, ButtonTwo, Table, Headers, Title } from './Turmas.style';
import { useEffect, useState } from 'react';

export default function TurmasList () {

    const navigate = useNavigate()

    const [turmas, setTurmas] = useState([])

    useEffect(() => {
        fetch('/data/turmas.json')
            .then(res => res.json())
            .then(data => setTurmas(data))
    }, [])

    return (
        <>

            <Title>Turmas</Title>

            <BtnContainer>

                <ButtonTwo onClick={() => navigate('/diretor/turmas/nova-turma')}>
                    <RiGraduationCapLine />
                    <span>Adicionar Turma</span>
                </ButtonTwo>

                <ButtonTwo onClick={() => navigate('/diretor/turmas/vincular-estudante')}>
                    <RiGraduationCapLine />
                    <span>Vincular professores</span>
                </ButtonTwo>

                <ButtonTwo onClick={() => navigate('/diretor/turmas/vincular-professor')}>
                    <RiGraduationCapLine />
                    <span>Vincular alunos</span>
                </ButtonTwo>

            </BtnContainer>

            <Table>
                <thead>
                    <tr>
                        <Headers>Ano</Headers>
                        <Headers>Classe</Headers>
                        <Headers>Turma</Headers>
                        <Headers>Período</Headers>
                        <Headers>Prof/Disciplina</Headers>
                        <Headers>Alunos</Headers>
                        <Headers>Status Matrícula</Headers>
                        <Headers>...</Headers>
                    </tr>
                </thead>
                <tbody>
                    {turmas.map(turma => (
                        <TableRowItem
                            ano={turma.ano}
                            classe={turma.classe}
                            turma={turma.turma}
                            periodo={turma.periodo}
                            prof={turma.professores_id.length}
                            aluno={turma.alunos_id.length}
                            status='Aberto'
                        />
                    ))}
                </tbody>
            </Table>

        </>
    )
}