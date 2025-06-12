import styled from "styled-components";
import { Content, Title } from "../../Styles/GlobalStyle";
import Select from "../../Components/Select";
import Button from "../../Components/Button";
import { useState } from "react";
import { FcCancel } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    select {
        max-width: 300px;
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

    .reqOption {
        max-width: 300px;
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

    /* ---------------------------------------------------------------------------------------------------- */
    /*                              Acima: Requerimento / Abaixo: Solicitados                               */
    /* ---------------------------------------------------------------------------------------------------- */

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

    h3 {
        text-align: center;
        margin-top: 40px;
    }

    h4 {
        margin-top: 5px;
        display: inline;
    }
`

export default function Requerimento () {

    const [currReq, setCurrReq] = useState('disponivel')

    return (
        <>
        <Title>Requerimentos</Title>
        <Content>
        <Container>

        <div className="reqHeader"> 
            <span onClick={() => setCurrReq('disponivel')} className={`navlink ${currReq === 'disponivel' ? 'navlinkcurrent' : null}`}>Disponíveis</span>
            <span onClick={() => setCurrReq('solicitado')} className={`navlink ${currReq === 'solicitado' ? 'navlinkcurrent' : null}`}>Solicitados</span>
        </div>

        <hr />

        {currReq === 'disponivel' ? (

            <>
            <div className="reqOption">
                <Select
                    name='Requerimentos disponíveis:'
                    type='text'
                >
                    <option value="" disabled selected>Selecione o assunto</option>
                    <option value="reqAcademico">Acadêmico</option>
                    <option value="reqDocumentacao">Documentação</option>
                    <option value="reqFinanceiro">Financeiro</option>
                    <option value="reqMatricula">Matrícula</option>
                    <option value="reqOuvidoria">Ouvidoria</option>
                    <option value="reqOutro">Outro</option>
                </Select>
            </div>

                <input className="title" type="text" maxlength="500" placeholder="Título" />
                <textarea className="subject" type="text" maxlength="5000" placeholder="Descrição" />

            <div className='btnContainer'>
                <Button type="submit">Enviar</Button>
            </div>  
            </>  

        ) : (
            <div className="solicitado">
                <div className="reqLegenda">
                   <FcProcess className="status-icon"/> <span>Em Andamento</span>
                   <FcCheckmark className="status-icon"/> <span>Concluído</span>
                   <FcCancel className="status-icon"/> <span>Cancelado</span>
                </div>
                
                <div className="reqCard">
                    <FcProcess className="reqIcon"/> <span className="reqCard-Title">Requisição de Histórico</span>
                    <div className="reqCard-Content">
                        <h4>Tipo:</h4> <h4 className="reqCard-Tipo">Documentação</h4>
                        <br />
                        <h4>Protocolo:</h4> <h4 className="reqCard-Protocolo">2025050008</h4>
                        <br />
                        <h4>Data de Requisição:</h4> <h4 className="reqCard-Data">03/06/2025 10:29</h4>
                        <p>Venho, por meio desta, solicitar a emissão do meu histórico escolar referente ao curso realizado nesta instituição, entre os anos de 2018 e 2022, com o objetivo de comprovar minha formação acadêmica junto a outra instituição de ensino, estando ciente de eventuais prazos ou procedimentos necessários para a emissão do documento.</p>
                    </div>
                    <hr />
                </div>
                <div className="reqCard">
                    <FcCheckmark className="reqIcon"/> <span className="reqCard-Title">Requisição de Segunda Via</span>
                    <div className="reqCard-Content">
                        <h4>Tipo:</h4> <h4 className="reqCard-Tipo">Financeiro</h4>
                        <br />
                        <h4>Protocolo:</h4> <h4 className="reqCard-Protocolo">2025050005</h4>
                        <br />
                        <h4>Data de Requisição:</h4> <h4 className="reqCard-Data">02/06/2025 15:37</h4>
                        <p>Solicito a emissão da segunda via do meu documento acadêmico, considerando a necessidade de substituição por motivo de extravio ou deterioração, ciente dos prazos e eventuais taxas previstas pela instituição.</p>
                    </div>
                    <hr />
                </div>
                <div className="reqCard">
                    <FcCancel className="reqIcon"/> <span className="reqCard-Title">Troca de Turma</span>
                    <div className="reqCard-Content">
                        <h4>Tipo:</h4> <h4 className="reqCard-Tipo">Matrícula</h4>
                        <br />
                        <h4>Protocolo:</h4> <h4 className="reqCard-Protocolo">2025050006</h4>
                        <br />
                        <h4>Data de Requisição:</h4> <h4 className="reqCard-Data">01/06/2025 20:08</h4>
                        <p>Venho solicitar a troca de turma no curso em que estou matriculado, em razão de incompatibilidade de horários, dificuldades pessoais ou acadêmicas, estando ciente da necessidade de disponibilidade de vagas e do processo interno de análise da solicitação.</p>
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