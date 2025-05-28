import styled from 'styled-components';

const Container = styled.button`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    color: var(--black);
    background-color: var(--white);
    padding: 1rem 0 1rem 1.25rem;
    width: 250px;
    border: none;
    cursor: pointer;

    svg {
        font-size: 20px;
    }

    span {
        font-size: 16px;
        font-weight: 600;
    }

    &:hover {
        transform: scale(103%);
    }
`

export default function ButtonTwo ({ children, onClick }) {
    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    )
}