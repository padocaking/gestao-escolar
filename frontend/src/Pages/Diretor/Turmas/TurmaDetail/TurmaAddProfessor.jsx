import styled from 'styled-components'
import { ContentTitle } from '../../Diretor.style'
import Button from '../../../../Components/Button'
import ButtonAlt from '../../../../Components/ButtonAlt';
import SelectTwo from '../../../../Components/SelectTwo';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from './TurmaDetail.style';

const Form = styled.form`
    position: relative;
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
    em: ['Português', 'Literatura', 'Matemática', 'Física', 'Química', 'Biologia', 'História', 'Geografia', 'Ed. Física', 'Filosofia', 'Sociologia', 'Inglês', 'Redação']
}

export default function TurmaAddProfessor () {
    
    const navigate = useNavigate()
    const { id } = useParams()
    
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

    useEffect(() => {
        fetch('/data/professores.json')
            .then(res => res.json())
            .then(data => setProfessores(data))
    }, [])

    return (
        <Form className='center'>

            <Container>
                <div className="back" onClick={() => navigate(`/diretor/turmas/${id}`)}>&#11164; Voltar</div>
                <div className='head-container'>
                    <h1>1º Ano B</h1> 
                    <span>2025 - <span className='periodo'>Manhã</span></span>
                </div>
            </Container>

            <Grid>
                <span className='head center'>DISCIPLINAS</span>
                <span className='head center'>PROFESSORES</span>
                {disc['em'].map(item => (
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
                <Button type="submit">Próximo</Button>
            </div>

        </Form>
    )
}