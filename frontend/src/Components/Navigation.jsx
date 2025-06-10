import styled from 'styled-components';
import NavItem from './NavItem';
import NavItemSub from './NavItemSub';
import { useState } from 'react';
import MenuItems from '../Naoseidarnome/MenuItems';
import useNavStore from '../Service/useNavStore';

const Container = styled.nav`
    position: absolute;
    width: var(--nav-width-opened);
    background-color: var(--bluish-gray);
    height: 100vh;
    padding-top: calc(var(--header-height));
    overflow-x: hidden;
    z-index: 100;
    box-shadow: 0 0 10px 0 rgb(0, 0, 0, 0.38);

    @media (max-width: 900px) {
        &.opened {
            transform: translateX(0%);
        }

        &.closed {
            transform: translateX(-100%);
        }
    }
`

export default function Nagivation () {

    const [currPage, setCurrPage] = useState("")

    const { navOpened } = useNavStore()

    console.log(navOpened)

    return (
        <Container className={navOpened ? 'opened' : 'closed'}>

            {MenuItems['diretor'].map((item, i) => {
                if (item.subItem.length === 0) {
                    return (
                        <NavItem
                            key={i}
                            path={item.path}
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
                            path={item.path}
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