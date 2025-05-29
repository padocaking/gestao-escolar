import styled from "styled-components"
import { Content, Title } from "../../../Styles/GlobalStyle"
import { ButtonTwo } from "../../Diretor/Turmas/Turmas.style"

const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`

export default function Turmas(){
    return (
        <>
            <Title>Turmas</Title>
            <Container>
                <ButtonTwo>5° Ano A</ButtonTwo>
                <ButtonTwo>4° Ano A</ButtonTwo>
            </Container>
        </>
    )
}