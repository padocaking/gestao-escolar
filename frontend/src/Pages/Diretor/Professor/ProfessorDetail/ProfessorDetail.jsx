import { Content } from '../../../../Styles/GlobalStyle'
import styled from 'styled-components'
import student from '../../../../Images/graduated.png'
import teacher from '../../../../Images/teacher.png'
import edit from '../../../../Images/edit.png'
import { Container } from '../../Turmas/TurmaDetail/TurmaDetail.style'
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

export default function ProfessorDetail () {

    const navigate = useNavigate()
    const { id } = useParams()

    return (
        <Content>
            <Container>
                <div className="back" onClick={() => navigate(`/diretor/professores`)}>&#11164; Voltar</div>
                <div className='head-container'>
                    <h1>Nome do professor</h1> 
                    <span>{id}<span className='periodo'></span></span>
                </div>

                <div className="card-container">
                    <Card onClick={() => navigate(`/diretor/turmas/${id}/editar`)}>
                        <img src={edit} alt="Editar" />
                        <span>Editar professor</span>
                    </Card>
                </div>

            </Container>
        </Content>
    )
}