import styled from "styled-components";

const Container = styled.footer`
    background-color: var(--main-two);
    width: 100%;
    min-height: 100px;
    border-top: 1px solid var(--second);
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;    
    z-index: 999;
`

const FooterText = styled.a`
    color: var(--second);
`

export default function Footer() {
    return(
        <Container>
            <FooterText>
                Direitos reservados
            </FooterText>
        </Container>
    )
}