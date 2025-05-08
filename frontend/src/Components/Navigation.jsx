import styled from 'styled-components';
import { IoHomeOutline } from "react-icons/io5";    // home
import { IoDocumentTextOutline } from "react-icons/io5";   // req
import { WiTime4 } from "react-icons/wi";           // time
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";  // financeiro
import { RiGraduationCapLine } from "react-icons/ri";   // central
import { FaRegUser } from "react-icons/fa6";        // user
import { IoIosArrowUp } from "react-icons/io";      // ARROW UP
import { IoIosArrowDown } from "react-icons/io";    // ARROW DOWN

const Container = styled.nav`
    position: fixed;
    width: var(--nav-width-opened);
    background-color: var(--white);
    height: var(--main-height);
    margin-top: var(--header-height);
`

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0;
`

const NavItem = styled.li`
    cursor: pointer;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 20px 0 20px 22px;
    font-size: 17px;
    font-weight: 400;
    color: var(--gray);

    span {
        letter-spacing: -1px;
    }

    svg {
        font-size: 22px;
        font-weight: 200;
    }

    &.active {
        color: black;
        font-weight: 600;
        box-shadow: inset 0 0 20px 5px var(--white);
        background-color: #ececec;
    }

    &:hover {
        span {
            letter-spacing: 0;
            transition: letter-spacing 0.1s linear;
        }
    }
`

export default function Nagivation () {
    return (
        <Container>
            <NavList>
                <NavItem className='active'>
                    <IoHomeOutline />
                    <span>Início</span>
                </NavItem>
                <NavItem>
                    <IoDocumentTextOutline />
                    <span>Requerimento</span>
                </NavItem>
                <NavItem>
                    <WiTime4 />
                    <span>Horários</span>
                </NavItem>
                <NavItem>
                    <HiOutlineDocumentCurrencyDollar />
                    <span>Financeiro</span>
                </NavItem>
                <NavItem>
                    <RiGraduationCapLine />
                    <span>Central Aluno</span>
                </NavItem>
                <NavItem>
                    <FaRegUser />
                    <span>Aluno</span>
                </NavItem>
            </NavList>
        </Container>
    )
}