import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Title } from '../Turmas.style';
import { Content } from '../../../../Styles/GlobalStyle';
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

const Return = styled.span`
    cursor: pointer;
    position: absolute;
    left: 3.25%;
    top: 2.75rem;
    color: var(--black);
    font-weight: 600;
    font-size: 25px;
`

export default function TurmaAdd () {

    const [currStep, setCurrStep] = useState(1.5)
    const [turmaValues, setTurmaValues] = useState({})

    const nagivate = useNavigate()

    console.log(turmaValues)

    return (
        <>

            <Content>

                <Return onClick={() => nagivate('/diretor/turmas')}>&#11164; Voltar</Return>

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