import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Content } from '../../../../Styles/GlobalStyle';
import Steps from '../../../../Components/Steps';
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

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

export default function ProfessorAdd () {

    const [currStep, setCurrStep] = useState(1.5)
    const [professorValues, setProfessorValues] = useState({})

    const nagivate = useNavigate()

    return (
        <>

            <Content>

                <Return onClick={() => nagivate('/diretor/professores')}>&#11164; Voltar</Return>

                <Steps total={2} curr={currStep} />

                {currStep === 1.5 ? (
                    <Step1 setCurrStep={setCurrStep} setProfessorValues={setProfessorValues} />
                ) : currStep === 2 ? (
                    <Step2 setCurrStep={setCurrStep} setProfessorValues={setProfessorValues} />
                ) :  null}

            </Content>

        </>        
    )
}