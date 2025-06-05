import styled from 'styled-components'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContentTitle } from '../Turmas.style'
import Select from '../../../../Components/Select'
import Input from '../../../../Components/Input'
import Button from '../../../../Components/Button'
import ButtonAlt from '../../../../Components/ButtonAlt';
import SelectTwo from '../../../../Components/SelectTwo';
import { useEffect, useState } from 'react';
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

const Grid = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1px;
    width: 85%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 3px 0px var(--second),
                0 0 3px 0px var(--second);

    span {
        background-color: var(--bluish-gray);
        display: flex;
        align-items: center;
        padding: 0 15px;

        &.head {
            background-color: var(--main-one);
            color: var(--white);
            padding: 20px;
            margin: -1px;
        }
    }
`

const disc = {
    fun: ['Português', 'Matemática', 'Ciências', 'História', 'Geografia', 'Artes', 'Ed. Física', 'Inglês', 'Redação'],
    em: ['Português', 'Literatura', 'Matemática', 'Física', 'Química', 'Biologia', 'História', 'Geografia', 'Ed. Física', 'Inglês', 'Redação']
}

export default function Step3 ({ turmaValues, setCurrStep }) {
    
    const navigate = useNavigate()
    
    const [professores, setProfessores] = useState([])
    const [defProfessores, setDefProfessores] = useState({})

    const handleChange = (event, disc) => {
        setDefProfessores(prev => ({
            ...prev,
            id_turma: 0,
            id_professor: Number(event.target.value),
            disciplina: disc
        }))
    }

    const clickHandler = () => {
        setCurrStep(2.5)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // POST GOES HERE
        console.log(defProfessores)

        navigate('/diretor/turmas')
    }

    useEffect(() => {
        fetch('/data/professores.json')
            .then(res => res.json())
            .then(data => setProfessores(data))
    }, [])

    return (
        <Form className='center' onSubmit={(e) => handleSubmit(e)}>

            <ContentTitle>VINCULAR PROFESSORES (opcional)</ContentTitle>

            <Grid>
                <span className='head center'>DISCIPLINAS</span>
                <span className='head center'>PROFESSORES</span>
                {disc[turmaValues.data.classe.includes('em') ? 'em' : 'fun'].map(item => (
                    <>
                    <span>{item}</span>
                    <SelectTwo notReq handleChange={(e) => handleChange(e, item)} >
                        <option value="" disabled selected>Selecione o professor</option>
                        {professores.map(prof => {
                            if (prof.disciplinas.includes(item)) {
                                return (
                                    <option value={prof.id}>{prof.nome}</option>
                                )
                            }
                        })}
                    </SelectTwo>
                    </>
                ))}
            </Grid>
                        
            <div className='btnContainer'>
                <ButtonAlt onClick={clickHandler}>Voltar</ButtonAlt>
                <Button type="submit">Próximo</Button>
            </div>

        </Form>
    )
}