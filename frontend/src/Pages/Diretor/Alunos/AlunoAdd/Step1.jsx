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
    width: 85%;

    & > *:nth-child(5) {
        grid-column: span 2;
    }
`



export default function Step1 ({ setCurrStep, setAlunoValues }) {

    const navigate = useNavigate()

    const schema = yup.object().shape({
        nome: yup
            .string()
            .required('Nome completo é obrigatório')
            .min(3, 'Nome deve ter ao menos 3 caracteres'),

        dataNascimento: yup
            .string()
            .required('Data de nascimento é obrigatória'),

        rg: yup
            .string()
            .required('RG é obrigatório')
            .matches(/^\d{5,14}$/, 'RG deve conter apenas números (entre 5 e 14 dígitos)'),

        cpf: yup
            .string()
            .required('CPF é obrigatório')
            .matches(/^\d{11}$/, 'CPF deve conter exatamente 11 números'),

        cep: yup
            .string()
            .required('CEP é obrigatório')
            .matches(/^\d{8}$/, 'CEP deve conter exatamente 8 números'),

        estado: yup
            .string()
            .required('Estado é obrigatório')
            .length(2, 'Use a sigla do estado (ex: PR, SP)'),

        cidade: yup
            .string()
            .required('Cidade é obrigatória'),

        endereco: yup
            .string()
            .required('Endereço é obrigatória'),

        numero: yup
        .string()
        .required('Número é obrigatória'),
    });

    
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors }
        } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        setCurrStep(2)
        setAlunoValues(prev => ({...prev, data}))
    }

    return (
        <Form className='center' onSubmit={handleSubmit(onSubmit)}>

            <ContentTitle>Dados do aluno</ContentTitle>
            
            <Grid>

                <Input
                    name='Nome completo'
                    type='text'
                    register={{...register('nome')}}
                    error={errors.nome?.message}
                />

                <Input
                    name='Data de nascimento'
                    type='date'
                    register={{...register('dataNascimento')}}
                    error={errors.dataNascimento?.message}
                />

                <Input
                    name='RG'
                    type='number'
                    register={{...register('rg')}}
                    error={errors.rg?.message}
                />

                <Input
                    name='CPF'
                    type='number'
                    register={{...register('cpf')}}
                    error={errors.cpf?.message}
                    value={watch('cpf')}
                />

                <Input
                    name='CEP'
                    type='number'
                    register={{...register('cep')}}
                    error={errors.cep?.message}
                />

                <Input
                    name='Estado'
                    type='text'
                    register={{...register('estado')}}
                    error={errors.estado?.message}
                />

                <Input
                    name='Cidade'
                    type='text'
                    register={{...register('cidade')}}
                    error={errors.cidade?.message}
                />

                <Input
                    name='Endereço'
                    type='text'
                    register={{...register('endereco')}}
                    error={errors.endereco?.message}
                />

                <Input
                    name='Numero'
                    type='text'
                    register={{...register('numero')}}
                    error={errors.numero?.message}
                />

            </Grid>
                        
            <div className='btnContainer'>
                <ButtonAlt type="button" onClick={() => navigate('/diretor/alunos')}>Voltar</ButtonAlt>
                <Button type="submit">Próximo</Button>
            </div>

        </Form>
    )
}