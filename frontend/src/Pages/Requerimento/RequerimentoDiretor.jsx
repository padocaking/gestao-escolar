import styled from "styled-components";
import { Content, Title } from "../Diretor/Turmas/Turmas.style";
import Select from "../../Components/Select";
import Button from "../../Components/Button";
import { useState } from "react";
import { FcProcess } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";

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

    .reqHeader span {
        font-size: 20px;
        margin-right: 20px;
        cursor: pointer;
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
        margin-top: 20px;
    }

    .navlinkcurrent {
        border-top: 10px;
        border-bottom: 4px solid #4238a7;
    }

    .navlink:hover {
        border-bottom: 4px solid #4238a7;
        cursor: pointer;
        transition: none;
    }

    .reqLegenda {
        font-size: 18px;
        margin-right: 20px;
        margin-bottom: 20px;
    }

    .reqLegenda span {
        margin-right: 25px;
    }

    .reqCard hr {
        width: 20%;
        margin: 0 auto;
        color: #4238a7;
        margin-top: 30px;
        margin-bottom: 25px;
    }

    .reqCard-Content p {
        min-width: 100%;
        max-width: 100%;
        margin-top: 10px;
        word-break: break-word;
        font-size: 18px;
    }

    .reqCard-Title {
        min-width: 100%;
        max-width: 100%;
        font-size: 18px;
        font-weight: bold;
        color: #4238a7;
    }

    .reqCard-Content {
        min-width: 100%;
        max-width: 100%;
        margin-left: 20px;
        margin-right: 20px;
    }

    .reqCard-Ongoing hr {
        width: 20%;
        margin: 0 auto;
        color: #4238a7;
        margin-top: 30px;
        margin-bottom: 25px;
    }

    .reqCard-Aluno {
        margin-top: 10px;
    }

    h3 {
        text-align: center;
        margin-top: 5px;
    }

    h4 {
        margin-top: 5px;
        display: inline;
    }
`

export default function RequerimentoDiretor () {

    const [currReq, setCurrReq] = useState('solicitado')

    return (
        <>
        <Title>Requerimentos</Title>
        <Content>
        <Container>

        <div className="reqHeader">           
            <span onClick={() => setCurrReq('solicitado')} className={`navlink ${currReq === 'solicitado' ? 'navlinkcurrent' : null}`}>Em Aberto</span> 
            <span onClick={() => setCurrReq('concluido')} className={`navlink ${currReq === 'concluido' ? 'navlinkcurrent' : null}`}>Concluídos</span>
            <hr />
        </div>
        <div className="reqLegenda">
            <FcProcess className="status-icon"/> <span>Em Aberto</span>
            <FcCheckmark className="status-icon"/> <span>Concluído</span>
        </div>

        {currReq === 'solicitado' ? (
            <>
            <div className="reqCard-Ongoing">
                <FcProcess className="reqIcon"/> <span className="reqCard-Title">Troca de Turma</span>
                <div className="reqCard-Content">
                    <h4>Tipo:</h4> <h4 className="reqCard-Tipo">Matrícula</h4>
                    <br />
                    <h4>Protocolo:</h4> <h4 className="reqCard-Protocolo">00007</h4>
                    <br />
                    <h4>Data de Requisição:</h4> <h4 className="reqCard-Data">03/06/2025 10:29</h4>
                    <div className="reqCard-Aluno">
                        <h4>Aluno:</h4> <h4 className="reqCard-AlunoNome">Amarildo Fonseca</h4>
                        <br />
                        <h4>Turma:</h4> <h4 className="reqCard-Turma">9º Ano B</h4>
                        <br />
                        <h4>Matrícula:</h4> <h4 className="reqCard-Matricula">202505001</h4>
                    </div>
                    <p>Venho solicitar a troca de turma no curso em que estou matriculado, em razão de incompatibilidade de horários, dificuldades pessoais ou acadêmicas, estando ciente da necessidade de disponibilidade de vagas e do processo interno de análise da solicitação.</p>
                </div>
                <div className='btnContainer'>
                    <Button type="resposta">Responder</Button>
                </div> 
                <hr />
            </div>
            <div className="reqCard-Ongoing">
                <FcProcess className="reqIcon"/> <span className="reqCard-Title">Requisição de Histórico</span>
                <div className="reqCard-Content">
                    <h4>Tipo:</h4> <h4 className="reqCard-Tipo">Documentação</h4>
                    <br />
                    <h4>Protocolo:</h4> <h4 className="reqCard-Protocolo">00006</h4>
                    <br />
                    <h4>Data de Requisição:</h4> <h4 className="reqCard-Data">03/06/2025 10:29</h4>
                    <div className="reqCard-Aluno">
                        <h4>Aluno:</h4> <h4 className="reqCard-AlunoNome">Valdilaine Silva</h4>
                        <br />
                        <h4>Turma:</h4> <h4 className="reqCard-Turma">8º Ano B</h4>
                        <br />
                        <h4>Matrícula:</h4> <h4 className="reqCard-Matricula">202505003</h4>
                    </div>
                    <p>Venho, por meio desta, solicitar a emissão do meu histórico escolar referente ao curso realizado nesta instituição, entre os anos de 2018 e 2022, com o objetivo de comprovar minha formação acadêmica junto a outra instituição de ensino, estando ciente de eventuais prazos ou procedimentos necessários para a emissão do documento.</p>
                </div>
                <div className='btnContainer'>
                    <Button type="resposta">Responder</Button>
                </div> 
                <hr />
            </div>
            <h3>FIM</h3>
            </>  
        ) : (
            <>
            <div className="reqCard">
                <FcCheckmark className="reqIcon"/> <span className="reqCard-Title">Requisição de Segunda Via</span>
                <div className="reqCard-Content">
                    <h4>Tipo:</h4> <h4 className="reqCard-Tipo">Financeiro</h4>
                    <br />
                    <h4>Protocolo:</h4> <h4 className="reqCard-Protocolo">00005</h4>
                    <br />
                    <h4>Data de Requisição:</h4> <h4 className="reqCard-Data">03/06/2025 20:54</h4>
                    <div className="reqCard-Aluno">
                        <h4>Aluno:</h4> <h4 className="reqCard-AlunoNome">David Junior</h4>
                        <br />
                        <h4>Turma:</h4> <h4 className="reqCard-Turma">6º Ano A</h4>
                        <br />
                        <h4>Matrícula:</h4> <h4 className="reqCard-Matricula">2025050014</h4>
                    </div>
                    <p>Solicito a emissão da segunda via do meu documento acadêmico, considerando a necessidade de substituição por motivo de extravio ou deterioração, ciente dos prazos e eventuais taxas previstas pela instituição.</p>
                </div>
                <hr />
            </div>
            <div className="reqCard">
                <FcCheckmark className="reqIcon"/> <span className="reqCard-Title">Críticas Sobre a Cantina</span>
                <div className="reqCard-Content">
                    <h4>Tipo:</h4> <h4 className="reqCard-Tipo">Ouvidoria</h4>
                    <br />
                    <h4>Protocolo:</h4> <h4 className="reqCard-Protocolo">00004</h4>
                    <br />
                    <h4>Data de Requisição:</h4> <h4 className="reqCard-Data">02/06/2025 15:37</h4>
                    <div className="reqCard-Aluno">
                        <h4>Aluno:</h4> <h4 className="reqCard-AlunoNome">Flávia de Lima</h4>
                        <br />
                        <h4>Turma:</h4> <h4 className="reqCard-Turma">9º Ano B</h4>
                        <br />
                        <h4>Matrícula:</h4> <h4 className="reqCard-Matricula">202505002</h4>
                    </div>
                    <p>A cantina da escola não está boa. Quase tudo que vendem é salgado, refrigerante e doce, e faz falta ter frutas ou lanches mais saudáveis. Além disso, as coisas são caras e nem todo mundo consegue comprar. Também já vi que às vezes as mesas estão sujas e parece que não limpam direito. Seria legal se a cantina tivesse comidas melhores e mais limpas, porque a gente come lá quase todo dia.</p>
                </div>
                <hr />
            </div>
            <h3>FIM</h3>
            </>  
        )
        }

        </Container>
        </Content>
        </>
    )
}