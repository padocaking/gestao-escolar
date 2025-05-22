import styled, { keyframes } from 'styled-components'

const titleAnim = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const Title = styled.h1`
    color: var(--black);
    font-size: 48px;
    padding-bottom: 2rem;
    animation: ${titleAnim} 0.4s ease-out;
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

export const Content = styled.div`
    background-color: var(--white);
    margin: 35px 0;
    padding: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 50px;
`

export const ContentTitle = styled.h2`
    position: relative;
    font-size: 32px;
    font-weight: 300;
    text-transform: uppercase;
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
        position: absolute;
        content: '';
        height: 2px;
        width: 500px;
        background-color: var(--bluish-gray);
        top: 0;
    }
`