import styled from 'styled-components';

const Container = styled.nav`
    position: fixed;
    width: var(--nav-width-opened);
    background-color: var(--white);
    height: var(--main-height);
    margin-top: var(--header-height);
`

export default function Nagivation () {
    return (
        <Container>
            Navigation
        </Container>
    )
}