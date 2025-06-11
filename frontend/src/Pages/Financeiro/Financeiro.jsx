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

    .finOption {
        max-width: 300px;
        margin-bottom: 20px;
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
        <Title>Financeiro</Title>
        <Content>
        <Container>

        <div className="reqHeader"> 
            <span onClick={() => setCurrReq('disponivel')} className={`navlink ${currReq === 'disponivel' ? 'navlinkcurrent' : null}`}>Em Aberto</span>
            <span onClick={() => setCurrReq('concluido')} className={`navlink ${currReq === 'concluido' ? 'navlinkcurrent' : null}`}>Concluídos</span>
            <hr />
        </div>
        <div className="reqLegenda">
            <MdAttachMoney className="status-icon"/> <span>Em Aberto</span>
            <FcCheckmark className="status-icon"/> <span>Pago</span>          
        </div>

        {currReq === 'disponivel' ? (

            <>
            <div className="reqCard">
                <MdAttachMoney className="reqIcon"/> <span className="reqCard-Title">Mensalidade de Junho/2025</span>
                <div className="reqCard-Content">
                    <h4>Valor:</h4> <h4 className="reqCard-Valor">R$ 644,28</h4>
                    <br />
                    <h4>Desconto:</h4> <h4 className="reqCard-Desconto">R$ 0,00</h4>
                    <br />
                    <h4>Data de Vencimento:</h4> <h4 className="reqCard-Vencimento">12/06/2025</h4>
                    <div className="reqCard-Aluno">
                        <h4>Aluno:</h4> <h4 className="reqCard-AlunoNome">Amarildo Fonseca</h4>
                        <br />
                        <h4>Ano Letivo:</h4> <h4 className="reqCard-Ano">2025</h4>
                        <br />
                        <h4>Matrícula:</h4> <h4 className="reqCard-Matricula">202505001</h4>
                    </div>
                </div>
                <div className='btnContainer'>
                    <Button type="boleto">Gerar Boleto</Button>
                </div> 
            </div>
            </>  
        ) : (
            <>
            <div className="finOption">
                <Select name='Ano Letivo:' type='text'>
                    <option value="" disabled selected>Selecione o Ano</option>
                    <option value="fin2025">2025</option>
                    <option value="fin2024">2024</option>
                </Select>
            </div>  
            <div className="concluido">
                <div className="reqCard">
                    <FcCheckmark className="reqIcon"/> <span className="reqCard-Title">Mensalidade de Maio/2025</span>
                    <div className="reqCard-Content">
                        <h4>Valor:</h4> <h4 className="reqCard-Valor">R$ 644,28</h4>
                        <br />
                        <h4>Desconto:</h4> <h4 className="reqCard-Desconto">R$ 0,00</h4>
                        <br />
                        <h4>Data de Vencimento:</h4> <h4 className="reqCard-Vencimento">12/05/2025</h4>
                        <div className="reqCard-Aluno">
                            <h4>Aluno:</h4> <h4 className="reqCard-AlunoNome">Amarildo Fonseca</h4>
                            <br />
                            <h4>Ano Letivo:</h4> <h4 className="reqCard-Ano">2025</h4>
                            <br />
                            <h4>Matrícula:</h4> <h4 className="reqCard-Matricula">202505001</h4>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="reqCard">
                    <FcCheckmark className="reqIcon"/> <span className="reqCard-Title">Mensalidade de Abril/2025</span>
                    <div className="reqCard-Content">
                        <h4>Valor:</h4> <h4 className="reqCard-Valor">R$ 644,28</h4>
                        <br />
                        <h4>Desconto:</h4> <h4 className="reqCard-Desconto">R$ 0,00</h4>
                        <br />
                        <h4>Data de Vencimento:</h4> <h4 className="reqCard-Vencimento">12/04/2025</h4>
                        <div className="reqCard-Aluno">
                            <h4>Aluno:</h4> <h4 className="reqCard-AlunoNome">Amarildo Fonseca</h4>
                            <br />
                            <h4>Ano Letivo:</h4> <h4 className="reqCard-Ano">2025</h4>
                            <br />
                            <h4>Matrícula:</h4> <h4 className="reqCard-Matricula">202505001</h4>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="reqCard">
                    <FcCheckmark className="reqIcon"/> <span className="reqCard-Title">Mensalidade de Março/2025</span>
                    <div className="reqCard-Content">
                        <h4>Valor:</h4> <h4 className="reqCard-Valor">R$ 644,28</h4>
                        <br />
                        <h4>Desconto:</h4> <h4 className="reqCard-Desconto">R$ 0,00</h4>
                        <br />
                        <h4>Data de Vencimento:</h4> <h4 className="reqCard-Vencimento">12/03/2025</h4>
                        <div className="reqCard-Aluno">
                            <h4>Aluno:</h4> <h4 className="reqCard-AlunoNome">Amarildo Fonseca</h4>
                            <br />
                            <h4>Ano Letivo:</h4> <h4 className="reqCard-Ano">2025</h4>
                            <br />
                            <h4>Matrícula:</h4> <h4 className="reqCard-Matricula">202505001</h4>
                        </div>
                    </div>
                    <hr />
                </div>
                <h3>FIM</h3>
            </div>
            </>
        )
        }

        </Container>
        </Content>
        </>
    )
}