import { useNavigate } from 'react-router-dom';
import { Container, ButtonTwo } from './Turmas.style';

export default function TurmaAdd () {

    const nagivate = useNavigate()

    return (
        <Container>

            <h1>Adicionar Turma</h1>

            <ButtonTwo onClick={() => nagivate('/turmas')}>
                <span>Voltar</span>
            </ButtonTwo>
        </Container>        
    )
}