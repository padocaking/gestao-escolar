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
    border-radius: 6.52349px;

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
    user-select: none;
    position: relative;
`

export const FullContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(88vh - var(--header-height));
`

export const ContentTitle = styled.h2`
    position: relative;
    font-size: 32px;
    font-weight: 400;
    text-transform: uppercase;
    padding-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:after {
        position: absolute;
        content: '';
        height: 2px;
        width: 500px;
        background-color: var(--bluish-gray);
        top: 0;
    }
`


export const FilterContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bluish-gray);
    margin-bottom: -35px;
    border-radius: 5px 5px 0 0;
    user-select: none;

    div {
        &.filterItem {
            height: 100%;
            font-size: 20px;
            padding: 20px;
            cursor: pointer;
        }
    }

    span {
        letter-spacing: 0px;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;

        &.add:hover {
            letter-spacing: 1px;
        }
    }

    h3 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 2px;
        font-weight: 500;
    }

    input {
        &.search {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            letter-spacing: 2px;
            font-weight: 500;
            border: none;
            padding: 15px;
            border-radius: 15px;
            width: 300px;
            letter-spacing: 0px;
        }
    }
`

export const Filter = styled.div`
    position: absolute;
    background-color: white;
    border-radius: 5px 5px 0 0;
    top: 10px;
    left: 45px;
    display: flex;
    gap: 20px;
    max-height: ${props => props.opened ? '350px' : '0px'};
    padding-left: ${props => props.opened ? '15px' : '0px'};
    opacity: ${props => props.opened ? '100%' : '0%'};
    overflow: hidden;
    box-shadow: 0 0 10px 0px #00000026;
    border-bottom: 2px solid var(--main-one);
    z-index: 999;
    font-size: 18px;

    div {
        &.filterHeader {
            padding: 15px 0;
        }
    }
`