import { Content } from '../../../../Styles/GlobalStyle'
import styled from 'styled-components'
import student from '../../../../Images/graduated.png'
import teacher from '../../../../Images/teacher.png'
import edit from '../../../../Images/edit.png'
import { Container } from './TurmaDetail.style'
import { useNavigate, useParams } from 'react-router-dom'

const Card = styled.div`
    background-color: #ffffff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 14px 0px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 200px;
    height: 200px;
    cursor: pointer;

    &:hover {
        transform: scale(104%);
    }

    img {
        width: 50%;
    }

    span {
        font-size: 17px;
        text-align: center;
        font-weight: 500;
    }
`

export default function TurmaDetail () {

    const navigate = useNavigate()
    const { id } = useParams()

    return (
        <Content>
            <Container>
                <div className="back" onClick={() => navigate(`/diretor/turmas`)}>&#11164; Voltar</div>
                <div className='head-container'>
                    <h1>1º Ano B</h1> 
                    <span>2025 - <span className='periodo'>Manhã</span></span>
                </div>

                <div className="card-container">
                    <Card onClick={() => navigate(`/diretor/turmas/${id}/vincular-aluno`)}>
                        <img src={student} alt="Aluno" />
                        <span>Adicionar aluno</span>
                    </Card>
                    <Card>
                        <img src={teacher} alt="Professor" />
                        <span>Adicionar professor</span>
                    </Card>
                    <Card>
                        <img src={edit} alt="Editar" />
                        <span>Editar turma</span>
                    </Card>
                </div>

            </Container>
        </Content>
    )
}