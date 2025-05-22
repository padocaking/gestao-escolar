import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Content, ButtonTwo, Title, ContentTitle } from './Turmas.style';
import Steps from '../../../Components/Steps';
import Select from '../../../Components/Select';

const Grid = styled.div`

`

export default function TurmaAdd () {

    const nagivate = useNavigate()

    return (
        <>

            <Title>Adicionar Turma</Title>

            <ButtonTwo onClick={() => nagivate('/turmas')}>
                <span>Voltar</span>
            </ButtonTwo>

            <Content>

                <Steps total={3} curr={1.5} />

                <ContentTitle>Criar Turma</ContentTitle>

                <Grid>

                    <Select
                        name='Classe'
                        type='text'
                    />
                    <Select
                        name='Turma'
                        type='text'
                    />
                    <Select
                        name='Período'
                        type='text'
                    />
                    <Select
                        name='Ano'
                        type='text'
                    />

                </Grid>
                
            </Content>

        </>        
    )
}