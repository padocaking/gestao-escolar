import styled from "styled-components"
import { Content, Title } from "../../Styles/GlobalStyle"
import Select from "../../Components/Select"
import SelectTwo from '../../Components/SelectTwo'
import Button from '../../Components/Button'

const Container = styled.div`
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;

    button {
        margin-bottom: 30px;
    }
    
    span {
        &.printer {
            font-size: 25px;
        }
    }

    Select,label{
        max-width: 100px;
        margin-left: 10px;
    }

    p{
        font-size: xx-large;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(22, 1fr);
        justify-content: center;
        align-items: center;
        background-color: var(--bluish-gray);
        gap: 1px;
        background-color: var(--main-two);
    }

    div {
        &.even {
            background-color: #eeeeee;
        }

        &.odd {
            background-color: #f9f9f9;
        }

        &.header{
            color: white;
        }

        &.second{
            background-color: #1e155e;
        }

        &.third{
            background-color: #160e50; 
        }

        &.fourth {
            background-color: #100947; 
        }

        &.fifth {
            background-color: #0c063c;
        }

        &.sixth {
            background-color: #080331;
        }

        &.seventh {
            background-color: #221778;
        }

        &.name{
            justify-content: left;
            padding-left: 30px;
            font-weight: 500;
        }
    }
`

const GridItem = styled.div`
    grid-column: ${props => `span ${props.span}`};
    height: 50px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: 400;
`

export default function Boletim () {
    return (
        <>
        <Title>Boletim</Title>
            <Container>
                <div className="grid">
                    
                    <GridItem className="header second" span={4}>
                        <select>
                            <option value="2025">2025</option>
                            <option value="2024">2024</option>
                        </select>
                    </GridItem>
                    <GridItem className="header second" span={6}> 1° Semestre </GridItem>
                    <GridItem className="header third" span={6}> 2° Semestre </GridItem>
                    <GridItem className="header fourth" span={2}> Anual </GridItem>
                    <GridItem className="header fifth" span={2}> Rec. Final </GridItem>
                    <GridItem className="header sixth" span={2}> Méd. Final </GridItem>

                    <GridItem className="header seventh" span={4}>&nbsp;</GridItem>
                    <GridItem className="header seventh" span={2}> 1° Bim </GridItem>
                    <GridItem className="header seventh" span={2}> 2° Bim </GridItem>
                    <GridItem className="header seventh" span={1}> Média </GridItem>
                    <GridItem className="header seventh" span={1}> Rec </GridItem>
                    <GridItem className="header seventh" span={2}> 3° Bim </GridItem>
                    <GridItem className="header seventh" span={2}> 4° Bim </GridItem>
                    <GridItem className="header seventh" span={1}> Média </GridItem>
                    <GridItem className="header seventh" span={1}> Rec </GridItem>
                    <GridItem className="header seventh" span={1}> Média </GridItem>
                    <GridItem className="header seventh" span={1}> Tot Falta </GridItem>
                    <GridItem className="header seventh" span={4}>&nbsp;</GridItem>

                    <GridItem className="header seventh" span={4}> Disciplina </GridItem>
                    <GridItem className="header seventh" span={1}> Nota </GridItem>
                    <GridItem className="header seventh" span={1}> Falta </GridItem>
                    <GridItem className="header seventh" span={1}> Nota </GridItem>
                    <GridItem className="header seventh" span={1}> Falta </GridItem>
                    <GridItem className="header seventh" span={1}>&nbsp;</GridItem>
                    <GridItem className="header seventh" span={1}>&nbsp;</GridItem>
                    <GridItem className="header seventh" span={1}> Nota </GridItem>
                    <GridItem className="header seventh" span={1}> Falta </GridItem>
                    <GridItem className="header seventh" span={1}> Nota </GridItem>
                    <GridItem className="header seventh" span={1}> Falta </GridItem>
                    <GridItem className="header seventh" span={1}>&nbsp;</GridItem>
                    <GridItem className="header seventh" span={1}>&nbsp;</GridItem>
                    <GridItem className="header seventh" span={6}>&nbsp;</GridItem>

                    <GridItem className="name odd" span={4}> Geografia </GridItem>
                    <GridItem className="odd" span={1}> 9.2 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 9.0 </GridItem>
                    <GridItem className="odd" span={1}> 2 </GridItem>
                    <GridItem className="odd" span={1}> 9.1 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 9.2 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 9.0 </GridItem>
                    <GridItem className="odd" span={1}> 2 </GridItem>
                    <GridItem className="odd" span={1}> 9.1 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 9.1 </GridItem>
                    <GridItem className="odd" span={1}> 4 </GridItem>
                    <GridItem className="odd" span={2}> - </GridItem>
                    <GridItem className="odd" span={2}>9.0</GridItem>

                    <GridItem className="name odd" span={4}> Língua Portuguesa </GridItem>
                    <GridItem className="odd" span={1}> 7.5 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.1 </GridItem>
                    <GridItem className="odd" span={1}> 5 </GridItem>
                    <GridItem className="odd" span={1}> 6.8 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 5.3 </GridItem>
                    <GridItem className="odd" span={1}> 2 </GridItem>
                    <GridItem className="odd" span={1}> 7.8 </GridItem>
                    <GridItem className="odd" span={1}> 2 </GridItem>
                    <GridItem className="odd" span={1}> 6.5 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.6 </GridItem>
                    <GridItem className="odd" span={1}> 9 </GridItem>
                    <GridItem className="odd" span={2}> - </GridItem>
                    <GridItem className="odd" span={2}> 6.6 </GridItem>

                    <GridItem className="name odd" span={4}> Arte </GridItem>
                    <GridItem className="odd" span={1}> 5.2 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.0 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.1 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.5 </GridItem>
                    <GridItem className="odd" span={1}> 3 </GridItem>
                    <GridItem className="odd" span={1}> 5.5 </GridItem>
                    <GridItem className="odd" span={1}> 2 </GridItem>
                    <GridItem className="odd" span={1}> 6.0 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.0 </GridItem>
                    <GridItem className="odd" span={1}> 5 </GridItem>
                    <GridItem className="odd" span={2}> - </GridItem>
                    <GridItem className="odd" span={2}> 6.0 </GridItem>

                    <GridItem className="name odd" span={4}> Redação </GridItem>
                    <GridItem className="odd" span={1}> 7.0 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 3.2 </GridItem>
                    <GridItem className="odd" span={1}> 2 </GridItem>
                    <GridItem className="odd" span={1}> 5.1 </GridItem>
                    <GridItem className="odd" span={1}> 6 </GridItem>
                    <GridItem className="odd" span={1}> 6.1 </GridItem>
                    <GridItem className="odd" span={1}> 1 </GridItem>
                    <GridItem className="odd" span={1}> 6.7 </GridItem>
                    <GridItem className="odd" span={1}> 1 </GridItem>
                    <GridItem className="odd" span={1}> 6.4 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.2 </GridItem>
                    <GridItem className="odd" span={1}> 3 </GridItem>
                    <GridItem className="odd" span={2}> - </GridItem>
                    <GridItem className="odd" span={2}> 6.2 </GridItem>

                    <GridItem className="name odd" span={4}> História </GridItem>
                    <GridItem className="odd" span={1}> 8.3 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.1 </GridItem>
                    <GridItem className="odd" span={1}> 5 </GridItem>
                    <GridItem className="odd" span={1}> 7.2 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.8 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 9.0 </GridItem>
                    <GridItem className="odd" span={1}> 3 </GridItem>
                    <GridItem className="odd" span={1}> 8.4 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.8 </GridItem>
                    <GridItem className="odd" span={1}> 8 </GridItem>
                    <GridItem className="odd" span={2}> - </GridItem>
                    <GridItem className="odd" span={2}> 7.8 </GridItem>

                    <GridItem className="name odd" span={4}> Ciências </GridItem>
                    <GridItem className="odd" span={1}> 8.5 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.6 </GridItem>
                    <GridItem className="odd" span={1}> 2 </GridItem>
                    <GridItem className="odd" span={1}> 8.1 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.8 </GridItem>
                    <GridItem className="odd" span={1}> 4 </GridItem>
                    <GridItem className="odd" span={1}> 6.5 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.2 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.6 </GridItem>
                    <GridItem className="odd" span={1}> 6 </GridItem>
                    <GridItem className="odd" span={2}> - </GridItem>
                    <GridItem className="odd" span={2}> 7.6 </GridItem>

                    <GridItem className="name odd" span={4}> Matemática </GridItem>
                    <GridItem className="odd" span={1}> 5.5 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.5 </GridItem>
                    <GridItem className="odd" span={1}> 3 </GridItem>
                    <GridItem className="odd" span={1}> 6.0 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.5 </GridItem>
                    <GridItem className="odd" span={1}> 1 </GridItem>
                    <GridItem className="odd" span={1}> 9.3 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.9 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.0 </GridItem>
                    <GridItem className="odd" span={1}> 4 </GridItem>
                    <GridItem className="odd" span={2}> - </GridItem>
                    <GridItem className="odd" span={2}> 7.0 </GridItem>

                    <GridItem className="name odd" span={4}> Educação Física </GridItem>
                    <GridItem className="odd" span={1}> 8.9 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 8.0 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 8.4 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.3 </GridItem>
                    <GridItem className="odd" span={1}> 4 </GridItem>
                    <GridItem className="odd" span={1}> 9.5 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.9 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 8.2 </GridItem>
                    <GridItem className="odd" span={1}> 4 </GridItem>
                    <GridItem className="odd" span={2}> - </GridItem>
                    <GridItem className="odd" span={2}> 8.2 </GridItem>

                    <GridItem className="name odd" span={4}> Inglês </GridItem>
                    <GridItem className="odd" span={1}> 8.2 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.0 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.1 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 8.6 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 6.1 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.3 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={1}> 7.2 </GridItem>
                    <GridItem className="odd" span={1}> - </GridItem>
                    <GridItem className="odd" span={2}> - </GridItem>
                    <GridItem className="odd" span={2}> 7.2 </GridItem>

                </div>

                <Button className='center'><span className="printer">🖨️</span> Imprimir boletim</Button>
            </Container>
        </>
    )
}