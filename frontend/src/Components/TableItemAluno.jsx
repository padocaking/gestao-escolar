import styled from 'styled-components';
import { MdOutlineEdit } from "react-icons/md";     // pencil outline
import { MdEdit } from "react-icons/md";            // pencil filled
import { MdDeleteOutline } from "react-icons/md";   // delete outline
import { MdDeleteForever } from "react-icons/md";   // delete filled
import ButtonAlt from './ButtonAlt';
import Button from './Button';
import { ButtonTwo } from '../Pages/Diretor/Diretor.style';

const Container = styled.tr`
    border-bottom: 1px solid #bbbbbb;
    background-color: var(--white);
    font-weight: 500;
    cursor: pointer;

    &:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    &:last-of-type {
        border-bottom: 2px solid var(--main);
    }

    &:hover {
        font-weight: 600;
        background-color: #eaeaea;
    }
`

const BtnsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 5px;

    button {

        padding: 15px;
        width: 180px;

        &.icon {
            padding: 0;
            width: auto;
            font-size: 24px;
            padding: 3px;
            border-radius: 5px;
        }

        &.del {
            &:hover {
                background-color: #d22525;
            }
        }

        svg.full {
            display: none;
        }

        &:hover {
            svg.out {
                display: none;
            }
            svg.full {
                display: initial;
            }
        }
    }
`

export default function TableItemAluno ({ matricula, nome, turma, status, add, onClick }) {

    const addStudent = () => {
        alert(`Aluno ${matricula} adicionado a turma ${add} com sucesso`)
    }

    return (
        <Container onClick={onClick}>
            <td>{matricula}</td>
            <td>{nome}</td>
            <td>{turma === null ? 'Nenhum' : turma}</td>
            <td>{status}</td>
            <td>
                <BtnsContainer>
                    {add ? (
                        <ButtonAlt onClick={addStudent}>Adicionar</ButtonAlt>
                    ) : (
                        <>
                        <button className='icon center'>
                            <MdOutlineEdit className='out' />
                            <MdEdit className='full' />
                        </button>
                        <button className='icon center del'>
                            <MdDeleteOutline className='out' />
                            <MdDeleteForever className='full' style={{color: 'white'}} />
                        </button>
                        </>
                    )}
                    
                </BtnsContainer>
            </td>
        </Container>
    )
}