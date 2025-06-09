import styled from "styled-components";

const Container = styled.footer`
    background-color: var(--main-two);
    width: 100%;
    min-height: var(--footer-height);
    border-top: 1px solid var(--second);
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;    
    z-index: 999;
    margin-top: 80px;
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