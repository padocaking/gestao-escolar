import styled from 'styled-components';
import { IoHomeOutline } from "react-icons/io5";    // home
import NavItem from './NavItem';
import NavItemSub from './NavItemSub';
import { useState } from 'react';

const Container = styled.nav`
    position: fixed;
    width: var(--nav-width-opened);
    background-color: var(--white);
    height: var(--main-height);
    margin-top: var(--header-height);
`

export default function Nagivation () {

    const [currPage, setCurrPage] = useState("")

    const clickHandler = (page) => {
        setCurrPage(page)
    }

    return (
        <Container>

            <NavItem
                icon={<IoHomeOutline />}
                text="Início"
                setPage={() => clickHandler("Início")}
                active={currPage === "Início"}
            />

            <NavItem
                icon={<IoHomeOutline />}
                text="Requerimentos"
                setPage={() => clickHandler("Requerimentos")}
                active={currPage === "Requerimentos"}
            />

            <NavItemSub
                clickHandler={clickHandler}
                currPage={currPage}
            />

        </Container>
    )
}