import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;

    @media (max-width: 670px) {
        gap: 15px;
    }
`

const Number = styled.span`
    background-color: var(--bluish-gray);
    width: 35px;
    height: 35px;
    padding: 10px;
    border-radius: 100%;
    font-weight: 400;

    &.active {
        background-color: var(--main);
        color: var(--white);
    }
`

const Bar = styled.div`
    position: relative;
    background-color: var(--bluish-gray);
    height: 7px;
    width: 100px;
    border-radius: 10px;

    @media (max-width: 670px) {
        width: 50px;
    }

    @media (max-width: 400px) {
        width: 0;
    }

    &:after {
        position: absolute;
        content: '';
        width: 0%;
        height: 100%;
        background-color: var(--main);
        border-radius: 10px;
        transition: width 0.2s ease-in-out;
    }

    &.half {
        &:after {
            width: 50%;
        }
    }

    &.full {
        &:after {
            width: 100%;
        }
    }
`

export default function Steps ({ total, curr }) {

    const components = [
        <Number className='center active'>1</Number>
    ]

    for (let i = 2; i <= total; i++) {
        components.push(
            <Bar className={curr >= i ? 'full' : curr > i - 1 ? 'half' : ''} />,
            <Number className={`center ${curr >= i ? 'active' : ''}`}>{i}</Number>
        )
    }

    return (
        <Container>
            {components}
        </Container>
    )
}