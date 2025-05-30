import styled from "styled-components"
import { Content, Title } from "../../Styles/GlobalStyle"

const Container = styled.div`
    width: 100%;

    .grid {
        display: grid;
        grid-template-columns: 200px repeat(14, 1fr) 100px 100px;
        justify-content: center;
        align-items: center;
        background-color: var(--bluish-gray);
    }
`

export default function Boletim () {
    return (
        <>
        <Title>Boletim</Title>
        <Content>
            <Container>
                <div className="grid">
                    <div className="row1 maior" style={{width: '300px'}}>ASD</div>
                    <div className="row1" style={{gridColumn: 'span 6'}}>1º SEMESTRE</div>
                    <div className="row1" style={{gridColumn: 'span 6'}}>2º SEMESTRE</div>
                    <div className="row1" style={{gridColumn: 'span 2'}}>Anual</div>
                    <div className="row1" style={{gridColumn: 'span 1'}}>Rec Final</div>
                    <div className="row1" style={{gridColumn: 'span 1'}}>Média Final</div>
                    <div className="row2" style={{width: '300px'}}>ASD</div>
                    <div className="row2">1º BIM</div>
                    <div className="row2">2º BIM</div>
                    <div className="row2">Média</div>
                    <div className="row2">Rec</div>
                    <div className="row2">3º BIM</div>
                    <div className="row2">4º BIM</div>
                    <div className="row2">Média</div>
                    <div className="row2">Rec</div>
                    <div className="row2">Média</div>
                    <div className="row2">Tot Falta</div>
                    <div className="row2"></div>
                </div>
            </Container>
        </Content>
        </>
    )
}