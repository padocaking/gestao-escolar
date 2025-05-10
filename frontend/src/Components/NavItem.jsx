import styled from 'styled-components'
import { IoIosArrowDown } from "react-icons/io";    // ARROW ICON

const Container = styled.li`
    position: relative;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 13px;
    color: var(--gray);
    padding: 18px 0 18px 25px;
    height: auto;
    overflow: hidden;
    user-select: none;

    span {
        letter-spacing: 0px;
        font-size: 15px;
        font-weight: 500;
    }

    svg {
        font-size: 20px;
        font-weight: 200;
    }

    &.active {
        color: black;
        background-color: #f5f5f5;

        &.sub {
            background-color: var(--white);
        }

        span {
            font-weight: 600;
        }
    }

    &:hover {
        span {
            letter-spacing: 1px;
            transition: letter-spacing 0.1s linear;
        }
    }

    .arrow {
        position: absolute;
        right: 30px;
        transition: all 0.1s linear;
    }
`

const SubNavList = styled.ul`
    position: relative;
    margin-left: 35px;
    overflow: hidden;
    height: ${props => props.height};

    &:after {
        position: absolute;
        content: '';
        width: 2px;
        height: 75%;
        background-color: lightgray;
        top: 10%;
    }
`

export default function NavItem ({
    icon,
    text,
    active,
    mult,
    setPage,
    sub
}) {

    return (
        <>
        <Container className={`${active ? 'active' : ''} ${sub ? 'sub' : ''}`} onClick={() => setPage()} >

            {icon}

            <span>{text}</span>

            {mult && active ? (
                <IoIosArrowDown className='arrow' />
            ) : null }

            {mult && !active ? (
                <IoIosArrowDown className='arrow' style={{transform: 'rotate(-90deg)'}} />
            ) : null}
            
        </Container>
        </>
    )
}