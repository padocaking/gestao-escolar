import styled from 'styled-components';
import NavItem from './NavItem';
import NavItemSub from './NavItemSub';
import { useState } from 'react';
import MenuItems from '../Naoseidarnome/MenuItems';
import useNavStore from '../Service/useNavStore';

const Container = styled.nav`
    position: fixed;
    width: ${props => props.navOpened ? 'var(--nav-width-opened)' : 'var(--nav-width-closed)'};
    background-color: var(--white);
    height: var(--main-height);
    padding-top: calc(var(--header-height) + 15px);
    overflow-x: hidden;
`

export default function Nagivation () {

    const [currPage, setCurrPage] = useState("")

    const { navOpened } = useNavStore()

    return (
        <Container navOpened={navOpened}>

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
                            subItem={item.subItem}
                        />
                    )
                }
            })}

        </Container>
    )
}