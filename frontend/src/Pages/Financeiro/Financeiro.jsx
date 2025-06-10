import styled from "styled-components";
import { Content, Title } from "../Diretor/Turmas/Turmas.style";
import Select from "../../Components/Select";
import Button from "../../Components/Button";
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";

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
        margin-top: 35px;
    }

    h4 {
        margin-top: 5px;
        display: inline;
    }
`

export default function Financeiro () {

    const [currReq, setCurrReq] = useState('disponivel')

    return (
        <>
        <Title>Requerimentos</Title>
        <Content>
        <Container>

        <div className="reqHeader"> 
            <span onClick={() => setCurrReq('disponivel')} className={`navlink ${currReq === 'disponivel' ? 'navlinkcurrent' : null}`}>Em Aberto</span>
            <span onClick={() => setCurrReq('concluido')} className={`navlink ${currReq === 'concluido' ? 'navlinkcurrent' : null}`}>Concluido</span>
            <hr />
        </div>
        <div className="reqLegenda">
            <MdAttachMoney className="status-icon"/> <span>Em Aberto</span>
            <FcCheckmark className="status-icon"/> <span>Pagos</span>
            <FcCancel className="status-icon"/> <span>Vencidos</span>
        </div>

        {currReq === 'disponivel' ? (

            <>
            <div className="reqCard">
                <MdAttachMoney className="reqIcon"/> <span className="reqCard-Title">Requisição de Segunda Via</span>
                <div className="reqCard-Content">
                    <h4>Tipo:</h4> <h4 className="reqCard-Tipo">Financeiro</h4>
                    <br />
                    <h4>Protocolo:</h4> <h4 className="reqCard-Protocolo">00002</h4>
                    <br />
                    <h4>Data de Requisição:</h4> <h4 className="reqCard-Data">02/06/2025 15:37</h4>
                    <div className="reqCard-Aluno">
                        <h4>Aluno:</h4> <h4 className="reqCard-AlunoNome">Guilherme Dugonski</h4>
                        <br />
                        <h4>Turma:</h4> <h4 className="reqCard-Turma">3º Ensino Médio A</h4>
                        <br />
                        <h4>Matrícula:</h4> <h4 className="reqCard-Matricula">00001</h4>
                    </div>
                    <p>Solicito a emissão da segunda via do meu documento acadêmico, considerando a necessidade de substituição por motivo de extravio ou deterioração, ciente dos prazos e eventuais taxas previstas pela instituição.</p>
                </div>
                <div className='btnContainer'>
                    <Button type="boleto">Gerar Boleto</Button>
                </div>
                <hr />  
            </div>
            </>  
        ) : (
            <div className="concluido">
                <div className="reqCard-Ongoing">
                    <FcCheckmark className="reqIcon"/> <span className="reqCard-Title">Requisição de Histórico</span>
                    <div className="reqCard-Content">
                        <h4>Tipo:</h4> <h4 className="reqCard-Tipo">Documentação</h4>
                        <br />
                        <h4>Protocolo:</h4> <h4 className="reqCard-Protocolo">00003</h4>
                        <br />
                        <h4>Data de Requisição:</h4> <h4 className="reqCard-Data">03/06/2025 10:29</h4>
                        <div className="reqCard-Aluno">
                            <h4>Aluno:</h4> <h4 className="reqCard-AlunoNome">Logan Gonçalves de Ramos</h4>
                            <br />
                            <h4>Turma:</h4> <h4 className="reqCard-Turma">8º Fundamental C</h4>
                            <br />
                            <h4>Matrícula:</h4> <h4 className="reqCard-Matricula">00003</h4>
                        </div>
                        <p>Venho, por meio desta, solicitar a emissão do meu histórico escolar referente ao curso realizado nesta instituição, entre os anos de 2018 e 2022, com o objetivo de comprovar minha formação acadêmica junto a outra instituição de ensino, estando ciente de eventuais prazos ou procedimentos necessários para a emissão do documento.</p>
                    </div>
                    <hr />
                </div>
                <div className="reqCard-Ongoing">
                    <FcCancel className="reqIcon"/> <span className="reqCard-Title">Requisição de Histórico</span>
                    <div className="reqCard-Content">
                        <h4>Tipo:</h4> <h4 className="reqCard-Tipo">Documentação</h4>
                        <br />
                        <h4>Protocolo:</h4> <h4 className="reqCard-Protocolo">00003</h4>
                        <br />
                        <h4>Data de Requisição:</h4> <h4 className="reqCard-Data">03/06/2025 10:29</h4>
                        <div className="reqCard-Aluno">
                            <h4>Aluno:</h4> <h4 className="reqCard-AlunoNome">Logan Gonçalves de Ramos</h4>
                            <br />
                            <h4>Turma:</h4> <h4 className="reqCard-Turma">8º Fundamental C</h4>
                            <br />
                            <h4>Matrícula:</h4> <h4 className="reqCard-Matricula">00003</h4>
                        </div>
                        <p>Venho, por meio desta, solicitar a emissão do meu histórico escolar referente ao curso realizado nesta instituição, entre os anos de 2018 e 2022, com o objetivo de comprovar minha formação acadêmica junto a outra instituição de ensino, estando ciente de eventuais prazos ou procedimentos necessários para a emissão do documento.</p>
                    </div>
                    <hr />
                </div>
                <h3>FIM</h3>
            </div>
        )
        }

        </Container>
        </Content>
        </>
    )
}