import styled from 'styled-components'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContentTitle } from '../Turmas.style'
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

    & > *:nth-child(3),
    & > *:nth-child(4) {
        grid-column: span 2;
    }
`



export default function Step1 ({ setCurrStep, setTurmaValues }) {

    const navigate = useNavigate()

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
        setCurrStep(2.5)
        setTurmaValues(prev => ({...prev, data}))
    }

    return (
        <Form className='center' onSubmit={handleSubmit(onSubmit)}>

            <ContentTitle>Dados da turma</ContentTitle>
            
            <Grid>

                <Select
                    name='Classe'
                    type='text'
                    register={{...register('classe')}}
                        error={errors.classe?.message}
                >
                    <option value="" disabled selected>Selecione a classe</option>
                    <option value="1fun">1º Fundamental</option>
                    <option value="2fun">2º Fundamental</option>
                    <option value="3fun">3º Fundamental</option>
                    <option value="4fun">4º Fundamental</option>
                    <option value="5fun">5º Fundamental</option>
                    <option value="6fun">6º Fundamental</option>
                    <option value="7fun">7º Fundamental</option>
                    <option value="8fun">8º Fundamental</option>
                    <option value="9fun">9º Fundamental</option>
                    <option value="1em">1º Ensino Médio</option>
                    <option value="2em">2º Ensino Médio</option>
                    <option value="3em">3º Ensino Médio</option>
                </Select>

                <Select
                    name='Turma'
                    type='text'
                    register={{...register('turma')}}
                    error={errors.turma?.message}
                >
                    <option value="" disabled selected>Selecione a turma</option>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                </Select>

                <Select
                    name='Período'
                    type='text'
                    register={{...register('periodo')}}
                    error={errors.periodo?.message}
                >
                    <option value="" disabled selected>Selecione o período</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                </Select>

                <Input
                    name='Ano'
                    type='Number'
                    register={{...register('ano')}}
                    error={errors.ano?.message}
                />

            </Grid>
                        
            <div className='btnContainer'>
                <ButtonAlt type="button" onClick={() => navigate('/diretor/turmas')}>Voltar</ButtonAlt>
                <Button type="submit">Próximo</Button>
            </div>

        </Form>
    )
}