import { useNavigate } from 'react-router-dom';
import { Container, ButtonTwo } from './Turmas.style';

export default function TurmaProfessor () {

    const nagivate = useNavigate()

    return (
        <Container>

            <h1>Vincular Professor</h1>

            <ButtonTwo onClick={() => nagivate('/turmas')}>
                <span>Voltar</span>
            </ButtonTwo>
        </Container>        
    )
}