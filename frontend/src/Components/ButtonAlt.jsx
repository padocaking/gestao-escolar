import styled, { keyframes } from 'styled-components'

const hover = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 500% 0; }
`

const Container = styled.button`
    width: 260px;
    position: relative;
    background-color: var(--bluish-gray);
    padding: 1.33rem;
    border-radius: 2rem;
    border: none;
    font-size: 15px;
    font-weight: 600;
    color: var(--main);
    z-index: 1;
    border: 1px solid var(--main);
    cursor: pointer;

    &:hover {
        letter-spacing: 1px;
    }
`

export default function ButtonAlt ({ children, onClick }) {
    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    )
}