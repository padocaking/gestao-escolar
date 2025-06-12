import { Content } from '../../../Styles/GlobalStyle'
import styled from 'styled-components'
import presenca from '../../../Images/presenca.png'
import teacher from '../../../Images/teacher.png'
import edit from '../../../Images/edit.png'
import { Container } from '../../Diretor/Turmas/TurmaDetail/TurmaDetail.style'
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

export default function TurmaDetailProf () {

    const navigate = useNavigate()
    const { id } = useParams()

    return (
        <Content>
            <Container>
                <div className="back" onClick={() => navigate(`/turmas`)}>&#11164; Voltar</div>
                <div className='head-container'>
                    <h1>1º Ano B</h1> 
                    <span>2025 - <span className='periodo'>Manhã</span></span>
                </div>

                <div className="card-container">
                    <Card onClick={() => navigate(`/turmas/${id}/chamada`)}>
                        <img src={presenca} alt="Presença" />
                        <span>Chamada</span>
                    </Card>
                    <Card onClick={() => navigate(`/turmas/${id}/lancamento-de-notas`)}>
                        <img src={teacher} alt="Professor" />
                        <span>Lançamento de notas</span>
                    </Card>
                </div>

            </Container>
        </Content>
    )
}