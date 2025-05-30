import styled from 'styled-components';
import { MdOutlineEdit } from "react-icons/md";     // pencil outline
import { MdEdit } from "react-icons/md";            // pencil filled
import { MdDeleteOutline } from "react-icons/md";   // delete outline
import { MdDeleteForever } from "react-icons/md";   // delete filled

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
        font-size: 24px;
        padding: 3px;
        border-radius: 5px;

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

export default function TableRowItem () {
    

    return (
        <Container>
            <td>2025</td>
            <td>5º</td>
            <td>A</td>
            <td>Manhã</td>
            <td>6/6</td>
            <td>22</td>
            <td>Aberto</td>
            <td>
                <BtnsContainer>
                    <button className='center'>
                        <MdOutlineEdit className='out' />
                        <MdEdit className='full' />
                    </button>
                    <button className='center del'>
                        <MdDeleteOutline className='out' />
                        <MdDeleteForever className='full' style={{color: 'white'}} />
                    </button>
                </BtnsContainer>
            </td>
        </Container>
    )
}