import styled from 'styled-components'

export const Container = styled.div`

    h1 {
        color: var(--black);
        font-size: 48px;
        padding-bottom: 2rem;
    }
`

export const BtnContainer = styled.div`
    display: flex;
    gap: 15px;
`

export const ButtonTwo = styled.button`
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

export const Table = styled.table`
    border-collapse: collapse;
    margin: 35px 0;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
    text-align: center;

    thead tr {
        background-color: var(--main-one);
        color: var(--white);
        text-align: center;
        font-weight: 800;
    }

    th, td {
        padding: 18px 21px;
    }
`

export const Headers = styled.th`
    cursor: pointer;
`