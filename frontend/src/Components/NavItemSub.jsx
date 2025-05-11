import styled from 'styled-components';
import NavItem from './NavItem';
import { useEffect, useState } from 'react';

const Container = styled.div`

`

const SubContainer = styled.div`
    margin-left: 0;
    max-height: ${props => props.height ? '120px' : '0'};
    overflow: hidden;
`

export default function NavItemSub ({
    clickHandler,
    currPage,
    icon,
    text,
    subItem
}) {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!subItem.map(item => item.text).includes(currPage)) {
            setOpen(false)
        }
    }, [currPage])

    return (
        <Container>

            <NavItem
                mult
                icon={icon}
                text={text}
                setPage={() => setOpen(!open)}
                active={subItem.map(item => item.text).includes(currPage)}
                open={open}
            />

            <SubContainer height={open}>

                {subItem.map((item, i) => {
                    return (
                        <NavItem
                            key={i}
                            icon={null}
                            text={item.text}
                            setPage={() => clickHandler(item.text)}
                            active={currPage === item.text}
                            sub
                        />
                    )
                })}

            </SubContainer>

        </Container>
    )
}