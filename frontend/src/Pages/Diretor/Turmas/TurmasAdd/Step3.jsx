import styled from 'styled-components'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContentTitle } from '../Turmas.style'
import Select from '../../../../Components/Select'
import Input from '../../../../Components/Input'
import Button from '../../../../Components/Button'
import ButtonAlt from '../../../../Components/ButtonAlt';

const Form = styled.form`
    width: 100%;
    flex-direction: column;
    gap: 50px;

    .btnContainer {
        display: flex;
        gap: 20px;
    }
`

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



export default function Step3 ({ setCurrStep }) {

    const schema = yup.object().shape({
        classe: yup.string().required('Classe é obrigatória'),
        turma: yup.string().required('Turma é obrigatória'),
        periodo: yup.string().required('Período é obrigatório'),
        ano: yup
            .number()
            .typeError('Ano deve ser um número')
            .required('Ano é obrigatório')
            .min(2000, 'Ano mínimo é 2000')
            .max(2100, 'Ano máximo é 2100'),
    });

    
    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            ano: 2025
        }
    });

    const onSubmit = (data) => {
        return data
    }

    const clickHandler = () => {
        setCurrStep(2.5)
    }

    return (
        <Form className='center' onSubmit={handleSubmit(onSubmit)}>

            <ContentTitle>VINCULAR PROFESSORES (opcional)</ContentTitle>
                        
            <div className='btnContainer'>
                <ButtonAlt onClick={clickHandler}>Voltar</ButtonAlt>
                <Button type="submit">Próximo</Button>
            </div>

        </Form>
    )
}