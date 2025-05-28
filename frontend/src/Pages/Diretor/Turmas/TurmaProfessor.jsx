import { useNavigate } from 'react-router-dom';
import { Content, ButtonTwo, Title } from './Turmas.style';

export default function TurmaProfessor () {

    const nagivate = useNavigate()

    return (
        <>

            <Title>Vincular Professor</Title>

            <ButtonTwo onClick={() => nagivate('/turmas')}>
                <span>Voltar</span>
            </ButtonTwo>
        </>        
    )
}