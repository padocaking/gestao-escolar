import styled from "styled-components";

const Container = styled.div`
    background-color: var(--main-two);
    position: fixed;
    width: 100%;
    height: var(--footer-height);
    border-top: 1px solid var(--second);
    padding: 5px;
    margin-top: calc(var(--main-height));
    display: flex;
    justify-content: center;
    align-items: center;
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