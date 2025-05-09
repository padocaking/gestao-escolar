import styled from 'styled-components';
import { IoHomeOutline } from "react-icons/io5";    // home
import { IoDocumentTextOutline } from "react-icons/io5";   // req
import { WiTime4 } from "react-icons/wi";           // time
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";  // financeiro
import { RiGraduationCapLine } from "react-icons/ri";   // central
import { FaRegUser } from "react-icons/fa6";        // user
import NavItem from './NavItem';
import useNavStore from '../Service/useNavStore'

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

export default function Nagivation () {

    const { subNavActive } = useNavStore()

    return (
        <Container>
            <NavList>

                <NavItem icon={<IoHomeOutline />} text="Início" />

                <NavItem icon={<IoDocumentTextOutline />} text="Requerimento" />

                <NavItem icon={<WiTime4 />} text="Horários" />

                <NavItem icon={<HiOutlineDocumentCurrencyDollar />} text="Financeiro" />

                <NavItem icon={<RiGraduationCapLine />} text="Central Aluno" active mult />

                <SubNavList height={subNavActive ? "120px" : "0px"}>
                    <NavItem text="Faltas" subNavItem />
                    <NavItem text="Notas" subNavItem />
                </SubNavList>

                <NavItem icon={<FaRegUser />} text="Aluno" />

            </NavList>
        </Container>
    )
}