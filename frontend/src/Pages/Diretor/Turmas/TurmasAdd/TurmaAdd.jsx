import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Content, ButtonTwo, Title, ContentTitle } from '../Turmas.style';
import Steps from '../../../../Components/Steps';
import Select from '../../../../Components/Select';
import Button from '../../../../Components/Button';
import Input from '../../../../Components/Input';
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 20px;
    width: 75%;

    & > *:nth-child(3),
    & > *:nth-child(4) {
        grid-column: span 2;
    }
`

export default function TurmaAdd () {

    const [currStep, setCurrStep] = useState(1.5)
    const [turmaValues, setTurmaValues] = useState({})

    const nagivate = useNavigate()

    console.log(turmaValues)

    return (
        <>

            <Title>Adicionar Turma</Title>

            <ButtonTwo onClick={() => nagivate('/diretor/turmas')}>
                <span>Voltar</span>
            </ButtonTwo>

            <Content>

                <Steps total={3} curr={currStep} />

                {currStep === 1.5 ? (
                    <Step1 setCurrStep={setCurrStep} setTurmaValues={setTurmaValues} />
                ) : currStep === 2.5 ? (
                    <Step2 setCurrStep={setCurrStep} setTurmaValues={setTurmaValues} turmaValues={turmaValues} />
                ) : currStep === 3 ? (
                    <Step3 setCurrStep={setCurrStep} turmaValues={turmaValues} setTurmaValues={setTurmaValues} />
                ) : null}

            </Content>

        </>        
    )
}