import styled from 'styled-components'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContentTitle } from '../../Diretor.style'
import Select from '../../../../Components/Select'
import Input from '../../../../Components/Input'
import Button from '../../../../Components/Button'
import ButtonAlt from '../../../../Components/ButtonAlt';
import { useNavigate } from 'react-router-dom';
import FileUploadCard from '../../../../Components/FileUploadCard';

const Container = styled.div`
    width: 100%;
    flex-direction: column;
    gap: 50px;

    .btnContainer {
        display: flex;
        gap: 20px;
    }
`

export default function Step1 ({ setCurrStep, setTurmaValues }) {

    const navigate = useNavigate()

    const handleClick = () => {

        // POST GOES HERE

        navigate('/diretor/alunos')

        alert("Aluno criado com sucesso!")
    }

    return (
        <Container className='center'>

            <FileUploadCard />
                        
            <div className='btnContainer'>
                <ButtonAlt onClick={() => setCurrStep(1.5)}>Voltar</ButtonAlt>
                <Button onClick={handleClick}>Concluir</Button>
            </div>

        </Container>
    )
}