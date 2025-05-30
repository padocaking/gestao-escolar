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
    display: grid;
    grid-template-columns: repeat(6, minmax(75px, 1fr));
    justify-content: center;
    align-items: center;
    background-color: var(--bluish-gray);

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

function SelectDisc ({ em }) {
    return (
        <SelectTwo>
            <option value="" disabled selected></option>
            <option value="portugues">Língua Portuguesa</option>
            <option value="matematica">Matemática</option>
            {em ? (
                <>
                <option value="fisica">Física</option>
                <option value="quimica">Química</option>
                <option value="Biologia">Biologia</option>
                </>
            ) : (
                <option value="ciencia">Ciências</option>
            )}
            <option value="historia">História</option>
            <option value="geografia">Geografia</option>
            <option value="artes">Artes</option>
            <option value="edfisica">Educação Física</option>
            <option value="ingles">Inglês</option>
        </SelectTwo>
    )
}

export default function Step2 ({ setCurrStep }) {

    const [em, setEm] = useState(true)

    const clickHandler = () => {
        setCurrStep(1.5)
    }

    return (
        <Form className='center'>

            <ContentTitle>GRADE DE HORÁRIOS</ContentTitle>

            <Grid>
                <span className='head'></span>
                <span className='head'>SEG</span>
                <span className='head'>TER</span>
                <span className='head'>QUA</span>
                <span className='head'>QUI</span>
                <span className='head'>SEX</span>
                <span className='row'>1º AULA</span>
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <span className='row'>2º AULA</span>
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <span className='row'>3º AULA</span>
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <span className='row'>4º AULA</span>
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <span className='row'>5º AULA</span>
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
                <SelectDisc em={em} />
            </Grid>
            
            <div className='btnContainer'>
                <ButtonAlt onClick={clickHandler}>Voltar</ButtonAlt>
                <Button type="submit">Próximo</Button>
            </div>

        </Form>
    )
}