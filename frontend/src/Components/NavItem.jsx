import styled from 'styled-components'
import { IoIosArrowUp } from "react-icons/io";      // ARROW UP
import { IoIosArrowDown } from "react-icons/io";    // ARROW DOWN

const Container = styled.li`
    position: relative;
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 18px 0 18px 25px;
    color: var(--gray);

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
    }
`

export default function NavItem ({ icon, text, active, mult }) {
    return (
        <>
        <Container className={active ? "active" : ""}>
            {icon}
            <span>{text}</span>
            <IoIosArrowUp className='arrow' />
        </Container>
        </>
    )
}