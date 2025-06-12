import styled, { keyframes } from 'styled-components'

const hover = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 500% 0; }
`

const Container = styled.button`
    width: 260px;
    position: relative;
    background-color: var(--light-gray);
    padding: 1.33rem;
    border-radius: 2rem;
    border: none;
    font-size: 15px;
    font-weight: 600;
    color: var(--white);
    z-index: 1;
    cursor: pointer;

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        background-image: linear-gradient(to right, var(--main), #4238a7, var(--main));
        background-size: 500%;
        z-index: -1;
    }

    &:hover {
        letter-spacing: 1px;

        &:after {
            animation: ${hover} 12s linear infinite;
        }
    }
`

export default function Button ({ children, onClick, className }) {
    return (
        <Container className={className} onClick={onClick}>
            {children}
        </Container>
    )
}