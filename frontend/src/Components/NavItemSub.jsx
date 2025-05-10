import styled from 'styled-components';
import { IoHomeOutline } from "react-icons/io5";    // home
import NavItem from './NavItem';
import { useEffect, useState } from 'react';

const Container = styled.div`

`

const SubContainer = styled.div`
    margin-left: 25px;
    max-height: ${props => props.height ? '120px' : '0'};
    overflow: hidden;
    border-left: 2px solid #e9e9e9;
`

export default function NavItemSub ({ clickHandler, currPage, icon, text, subText}) {

    const [open, setOpen] = useState(false)

    console.log(currPage)

    const handleClick = (text) => {
        setOpen(!open)
        clickHandler(text)
    }

    useEffect(() => {
        if (!["Central Aluno", "Faltas", "Notas"].includes(currPage)) {
            setOpen(false)
        }
    }, [currPage])

    return (
        <Container>

            <NavItem
                mult
                icon={icon}
                text={text}
                setPage={() => handleClick(text)}
                active={["Central Aluno", "Faltas", "Notas"].includes(currPage)}
            />

            <SubContainer height={open}>

                {(subText || []).map((item, i) => {
                    return (
                        <NavItem
                            key={i}
                            icon={null}
                            text={item}
                            setPage={() => clickHandler(item)}
                            active={currPage === item}
                            sub
                        />
                    )
                })}

            </SubContainer>

        </Container>
    )
}