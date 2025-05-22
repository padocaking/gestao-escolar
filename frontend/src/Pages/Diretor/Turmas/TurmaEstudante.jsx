import { useNavigate } from 'react-router-dom';
import { Content, ButtonTwo, Title } from './Turmas.style';

export default function TurmaEstudante () {

    const nagivate = useNavigate()

    return (
        <>

            <Title>Vincular Estudante</Title>

            <ButtonTwo onClick={() => nagivate('/turmas')}>
                <span>Voltar</span>
            </ButtonTwo>
        </>        
    )
}