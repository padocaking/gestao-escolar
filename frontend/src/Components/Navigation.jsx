import styled from 'styled-components';
import { IoHomeOutline } from "react-icons/io5";    // home
import NavItem from './NavItem';
import NavItemSub from './NavItemSub';
import { useState } from 'react';
import MenuItems from '../Naoseidarnome/MenuItems';

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

            {MenuItems.aluno.map((item, i) => {
                if (item.subItem.length === 0) {
                    return (
                        <NavItem
                            key={i}
                            icon={item.icon}
                            text={item.text}
                            setPage={() => setCurrPage(item.text)}
                            active={currPage === item.text}
                        />
                    )
                } else {
                    return (
                        <NavItemSub
                            key={i}
                            clickHandler={setCurrPage}
                            currPage={currPage}
                            icon={item.icon}
                            text={item.text}
                            subText={item.subItem}
                        />
                    )
                }
            })}

        </Container>
    )
}