import styled from "styled-components";
import { Content, Title } from "../Diretor/Turmas/Turmas.style";
import Select from "../../Components/Select";
import Button from "../../Components/Button";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    select {
        width: 300px;
        font-size: 16px;
    }

    input {
        width: 80%;
        margin-top: 20px;
        padding-left: 10px;

    }

    a {
        text-decoration: none;
        color: inherit;
        font-size: 20px;
        margin-right: 20px;
    }

    hr {
        margin-top: 4px;
        margin-bottom: 20px;
    }

    textarea {
        min-width: 100%;
        max-width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
        padding-left: 10px;
        padding-top: 10px;
    }

    .title {
        width: 50%;
        height: 35px;
        font-size: 18px;
    }

    .subject {
        width: 100%;
        height: 250px;
        font-size: 15px;
    }

    .btnContainer {
        display: flex;
        gap: 20px;
        justify-content: flex-end;
    }

    .navlinkcurrent {
        border-top: 10px;
        border-bottom: 4px solid #4238a7;
    }

    .navlink:hover {
        border-bottom: 4px solid #4238a7;
    }
`

export default function Requerimento () {
    return (
        <>
        <Title>Requerimento</Title>
        <Content>
        <Container>

        <div> 
            <a href="/Requerimento" className="navlinkcurrent">Disponíveis</a>
            <a href="/" className="navlink">Solicitados</a>
        </div>

        <hr />

        <Select
            name='Requerimentos disponíveis:'
            type='text'
        >
            <option value="" disabled selected>Selecione o assunto</option>
            <option value="reqFinanceiro">Financeiro</option>
            <option value="reqCoordenacao">Coordenação</option>
            <option value="reqSecretaria">Secretaria</option>
            <option value="reqMatricula">Matrícula</option>
            <option value="reqOuvidoria">Ouvidoria</option>
            <option value="reqOutro">Outro</option>
        </Select>

            <input className="title" type="text" maxlength="500" placeholder="Título" />
            <textarea className="subject" type="text" maxlength="5000" placeholder="Descrição" />

        <div className='btnContainer'>
            <Button type="submit">Enviar</Button>
        </div>    

        </Container>
        </Content>
        </>
    )
}