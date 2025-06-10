import styled from 'styled-components'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContentTitle } from '../Turmas.style'
import Button from '../../../../Components/Button'
import ButtonAlt from '../../../../Components/ButtonAlt';
import SelectTwo from '../../../../Components/SelectTwo';
import { useState } from 'react';

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
    width: 90%;
    display: grid;
    grid-template-columns: repeat(6, minmax(75px, 1fr));
    justify-content: center;
    align-items: center;
    background-color: var(--bluish-gray);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 3px 0px var(--second),
                0 0 3px 0px var(--second);

    span {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;

        &.head {
            padding: 10px;
            background-color: var(--main-one);
            color: var(--bluish-gray);
        }

        &.row {
            font-size: 14px;
            color: var(--black);
        }
    }
`

const AutoFill = styled.span`
    margin-top: -40px;
    cursor: pointer;
    border-radius: 10px;
    font-weight: 500;
    padding: 15px;
    color: var(--main-two);
    width: 200px;

    &:hover {
        background-color: var(--bluish-gray);
    }

    &.second {
        background-color: var(--main-one);
        color: var(--white);
        padding: 10px;


        &.hover {
            background: white;
            color: var(--main-two);
        }
    }
`

const Requirements = styled.section`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, minmax(75px, 1fr));
    justify-content: center;
    align-items: center;
    gap: 1px;
    background-color: var(--white);
    font-size: 15px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 3px 0px var(--second),
                0 0 3px 0px var(--second);

    span {

        padding: 12px;

        &.head {
            background-color: var(--main-one);
            color: var(--bluish-gray);
            text-align: center;
            margin: -1px;
        }

        &.row {
            background-color: var(--bluish-gray);
            letter-spacing: 2px;
            padding-left: 20px;
        }

        &.body {
            text-align: center;
            background-color: var(--white);
            letter-spacing: 5px;
            color: #b10a0a;

            &.correct {
                background-color: var(--white);
                color: #043304
            }
        }

    }
`

function SelectDisc ({ em, handleChange, value }) {
    return (
        <SelectTwo handleChange={handleChange} value={value}>
            <option value="" disabled selected>Selecione</option>
            <option value="Português">Português</option>
            <option value="Matemática">Matemática</option>
            {em ? (
                <>
                <option value="Física">Física</option>
                <option value="Química">Química</option>
                <option value="Biologia">Biologia</option>
                </>
            ) : (
                <option value="Ciências">Ciências</option>
            )}
            <option value="História">História</option>
            <option value="Geografia">Geografia</option>
            <option value="Artes">Artes</option>
            <option value="Ed. Física">Ed. Física</option>
            <option value="Inglês">Inglês</option>
            <option value="Redação">Redação</option>
        </SelectTwo>
    )
}

function DiscTable ({ disc, curr, min, setFilled }) {
    if (curr < min) {
        setFilled(false)
    }

    return (
        <>
        <span className='row'>{disc}</span>
        <span className={`body ${curr >= min ? 'correct' : null}`}>{curr} / {min}</span>
        </>
    )
}

const MinDisc = {
    fun: [
        {
            disc: 'Português',
            min: 5
        },
        {
            disc: 'Matemática',
            min: 5
        },
        {
            disc: 'Ciências',
            min: 3
        },
        {
            disc: 'História',
            min: 3
        },
        {
            disc: 'Geografia',
            min: 3
        },
        {
            disc: 'Artes',
            min: 1
        },
        {
            disc: 'Ed. Física',
            min: 2
        },
        {
            disc: 'Inglês',
            min: 2
        },
        {
            disc: 'Redação',
            min: 1
        }
    ],
    em: [
        {
            disc: 'Português',
            min: 4
        },
        {
            disc: 'Literatura',
            min: 2
        },
        {
            disc: 'Matemática',
            min: 4
        },
        {
            disc: 'Física',
            min: 3
        },
        {
            disc: 'Química',
            min: 3
        },
        {
            disc: 'Biologia',
            min: 3
        },
        {
            disc: 'História',
            min: 2
        },
        {
            disc: 'Geografia',
            min: 2
        },
        {
            disc: 'Ed. Física',
            min: 2
        },
        {
            disc: 'Inglês',
            min: 2
        },
        {
            disc: 'Filosofia',
            min: 1
        },
        {
            disc: 'Sociologia',
            min: 1
        },
        {
            disc: 'Redação',
            min: 1
        }
    ]
}

export default function Step2 ({ setCurrStep, setTurmaValues, turmaValues }) {

    const [classes, setClasses] = useState({})

    const [filled, setFilled] = useState(true)

    const em = turmaValues.data.classe.includes('em')

    const handleChange = (event, i) => {
        setClasses((prev) => ({
            ...prev,
            [i]: event.target.value
        }))
        setFilled(true)
    }

    const clickHandler = () => {
        setCurrStep(1.5)
    }

    const handleSubmit = (event, data) => {
        event.preventDefault()
        if (filled) {
            setCurrStep(3)
            setTurmaValues(prev => ({
                ...prev,
                grade: data
            }))

            // POST GOES HERE AND MUST RETURN CLASS ID

        } else {
            alert('Mínimo de aulas necessário não antigidas')
        }
    }

    const autoFill = () => {

        const indexes = []

        for (let i = 0; i < 30; i++) {
            if (!em && (i + 1) % 6 !== 0) {
                indexes.push(i)
            } else if (em) {
                indexes.push(i)
            }
        }

        const disc = []

        for (let i = 0; i < MinDisc[em ? 'em' : 'fun'].length; i++) {
            for (let j = 0; j < MinDisc[em ? 'em' : 'fun'][i].min; j++) {
                disc.push(MinDisc[em ? 'em' : 'fun'][i].disc)
            }
        }

        const output = []

        for (let i = 0; i < disc.length; i++) {

            const rngIndex = Math.floor(Math.random() * indexes.length)

            output.push({
                [indexes[rngIndex]]: disc[i]
            })

            let indexOfIndex = indexes.indexOf(indexes[rngIndex])
            indexes.splice(indexOfIndex, 1)

        }

        setClasses(Object.assign({}, ...output))

        setFilled(true)

    }

    return (
        <Form className='center' onSubmit={(e) => handleSubmit(e, classes)}>

            <ContentTitle>GRADE DE HORÁRIOS</ContentTitle>

            <Grid>
                <span className='head'></span>
                <span className='head'>SEG</span>
                <span className='head'>TER</span>
                <span className='head'>QUA</span>
                <span className='head'>QUI</span>
                <span className='head'>SEX</span>

                {Array.from({ length: em ? 6 : 5}).map((_, i) => (
                    <>
                    <span className='row'>{i+1}º AULA</span>
                    {Array.from({ length: 5 }).map((_, j) => {
                        return (
                            <SelectDisc
                                em={turmaValues.data.classe.includes("em")}
                                handleChange={(e) => handleChange(e, 6 * j + i)}
                                value={classes[6 * j + i]}
                            />
                        )
                    })}
                    </>
                ))}
            </Grid>

            <AutoFill className='center' onClick={() => console.log('trolado')}>Limpar</AutoFill>
            <AutoFill className='center second' onClick={autoFill}>Preencher automático</AutoFill>

            <ContentTitle>MÍNIMO DE AULAS NECESSÁRIOS</ContentTitle>

            <Requirements>
                <span className='head'>DISCIPLINAS</span>
                <span className='head'>AULAS</span>
                
                {MinDisc[em ? 'em' : 'fun'].map(item => (
                    <DiscTable
                        disc={item.disc}
                        min={item.min}
                        curr={Object.values(classes).filter(aula => aula === item.disc).length}
                        setFilled={setFilled}
                    />
                ))}

            </Requirements>
            
            <div className='btnContainer'>
                <ButtonAlt onClick={() => setCurrStep(1.5)}>Voltar</ButtonAlt>
                <Button type="submit">Próximo</Button>
            </div>

        </Form>
    )
}