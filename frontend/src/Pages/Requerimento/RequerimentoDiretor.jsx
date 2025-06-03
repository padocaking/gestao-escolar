import styled from "styled-components";
import { Content, Title } from "../Diretor/Turmas/Turmas.style";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    select {
        width: 500px;
    }

    input {
        width: 80%;
    }
`

export default function RequerimentoDiretor () {
    return (
        <>
        <Title>Requerimentos</Title>
        <Content>
        <Container>
            <select>
                <option>
                    Matricula
                </option>
                <option>
                    AAAAAAAA
                </option>
                <option>
                    Derrame
                </option>
            </select>
            <input type="text" placeholder="Assunto" />
            <input type="text" placeholder="Descrição" />
            <button>Enviar</button>
        </Container>
        </Content>
        </>
    )
}