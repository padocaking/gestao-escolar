import styled from 'styled-components';
import { IoHomeOutline } from "react-icons/io5";    // home
import NavItem from './NavItem';
import { useState } from 'react';

const Container = styled.div`

`

const SubContainer = styled.div`
    margin-left: 25px;
    height: ${props => props.height ? 'auto' : '0'};
    overflow: hidden;
`

export default function NavItemSub ({ clickHandler, currPage }) {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
        clickHandler("Central aluno")
    }

    return (
        <Container>

            <NavItem
                icon={<IoHomeOutline />}
                text="Requerimentos"
                setPage={() => handleClick()}
                active={currPage === "Central aluno"}
            />

            <SubContainer height={open}>

                <NavItem
                    icon={<IoHomeOutline />}
                    text="Requerimentos"
                    setPage={() => clickHandler("Outra coisa")}
                    active={currPage === "Outra coisa"}
                />

                <NavItem
                    icon={<IoHomeOutline />}
                    text="Requerimentos"
                    setPage={() => clickHandler("Aquela otra")}
                    active={currPage === "Aquela otra"}
                />

            </SubContainer>

        </Container>
    )
}