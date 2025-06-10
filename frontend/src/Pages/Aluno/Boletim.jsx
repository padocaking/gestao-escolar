import styled from "styled-components"
import { Content, Title } from "../../Styles/GlobalStyle"

const Container = styled.div`
    width: 100%;

    p{
        font-size: xx-large;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(22, 1fr);
        justify-content: center;
        align-items: center;
        background-color: var(--bluish-gray);
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
        }
    }
`

const GridItem = styled.div`
    grid-column: ${props => `span ${props.span}`};
    height: 50px;
    align-items: center;
    display: flex;
    justify-content: center;
`

export default function Boletim () {
    return (
        <>
        <Title>Boletim</Title>
        <Content>
            <Container>
                <p>2025</p>
                <div className="grid">
                    
                    <GridItem className="header second" span={4}>&nbsp;</GridItem>
                    <GridItem className="header second" span={6}> 1° Semestre </GridItem>
                    <GridItem className="header third" span={6}> 2° Semestre </GridItem>
                    <GridItem className="header fourth" span={2}> Anual </GridItem>
                    <GridItem className="header fifth" span={2}> Rec. Final </GridItem>
                    <GridItem className="header sixth" span={2}> Méd. Final </GridItem>

                    <GridItem className="header second" span={4}>&nbsp;</GridItem>
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
                    <GridItem className="odd" span={4}>&nbsp;</GridItem>

                    <GridItem className="name even" span={4}> Língua Portuguesa </GridItem>
                    <GridItem className="even" span={1}> 9.2 </GridItem>
                    <GridItem className="even" span={1}> - </GridItem>
                    <GridItem className="even" span={1}> 9.0 </GridItem>
                    <GridItem className="even" span={1}> 2 </GridItem>
                    <GridItem className="even" span={1}> 9.1 </GridItem>
                    <GridItem className="even" span={1}> - </GridItem>
                    <GridItem className="even" span={1}> 9.2 </GridItem>
                    <GridItem className="even" span={1}> - </GridItem>
                    <GridItem className="even" span={1}> 9.0 </GridItem>
                    <GridItem className="even" span={1}> 2 </GridItem>
                    <GridItem className="even" span={1}> 9.1 </GridItem>
                    <GridItem className="even" span={1}> - </GridItem>
                    <GridItem className="even" span={1}> 9.1 </GridItem>
                    <GridItem className="even" span={1}> 4 </GridItem>
                    <GridItem className="even" span={4}>&nbsp;</GridItem>

                </div>
            </Container>
        </Content>
        </>
    )
}