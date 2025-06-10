import styled, { keyframes } from 'styled-components'
import { IoIosArrowDown } from "react-icons/io";    // ARROW ICON
import useNavStore from '../Service/useNavStore';
import { useNavigate } from 'react-router-dom';

const arrowFade = keyframes`
    from {
        opacity: 0%;
    }
    to {
        opacity: 100%;
    }
`

const Container = styled.li`
    position: relative;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    color: var(--white);
    padding: 18px 0 18px 25px;
    height: auto;
    overflow: hidden;
    user-select: none;
    white-space: nowrap;
    border-bottom: ${props => props.sub ? '' : '1px solid rgba(255, 255, 255, 0.062)'};

    span {
        letter-spacing: 0px;
        font-size: 15px;
        font-weight: 500;
        margin-left: 45px;
        position: relative;
    }

    svg {
        font-size: 20px;
        font-weight: 200;
        position: absolute;
    }

    &.active {
        color: var(--white);
        background-color: #1d144eb0;

        &.sub {
            background-color:#2b1e74;
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
        right: 20px;
        transition: all 0.1s linear;
        animation: ${arrowFade} 0.2s ease-in-out;
    }

    &.sub:after {
        position: absolute;
        left: 33px;
        content: '';
        width: 3px;
        height: 100%;
        background-color: #cfcfcf;
    }
`

export default function NavItem ({
    path,
    icon,
    text,
    active,
    mult,
    setPage,
    sub,
    open
}) {
    
    const navigate = useNavigate()

    return (
        <>
        <Container className={`${active ? 'active' : ''} ${sub ? 'sub' : ''}`} onClick={() => {setPage(); navigate(path)}} sub={sub}>

            {icon}

            <span>{text}</span>

            {mult ? (
                <IoIosArrowDown className='arrow' style={open ? {transform: 'rotate(0deg)'} : {transform: 'rotate(-90deg)'}} />
            ) : null }
            
        </Container>
        </>
    )
}