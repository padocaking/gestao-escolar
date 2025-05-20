import styled from 'styled-components';
import NavItem from './NavItem';
import { useEffect, useState } from 'react';
import useNavStore from '../Service/useNavStore';

const Container = styled.div`

`

const SubContainer = styled.div`
    margin-left: 0;
    margin-bottom: 10px;
    max-height: ${props => props.height ? '180px' : '0'};
    overflow: hidden;
`

export default function NavItemSub ({
    clickHandler,
    currPage,
    icon,
    text,
    subItem
}) {

    //const [open, setOpen] = useState(false)
    const { subOpened, handleSub, closeSub } = useNavStore()

    useEffect(() => {
        if (!subItem.map(item => item.text).includes(currPage)) {
            closeSub()
        }
    }, [currPage])

    return (
        <Container>

            <NavItem
                mult
                icon={icon}
                text={text}
                setPage={handleSub}
                active={subItem.map(item => item.text).includes(currPage)}
                open={subOpened}
            />

            <SubContainer height={subOpened}>

                {subItem.map((item, i) => {
                    return (
                        <NavItem
                            key={i}
                            path={item.path}
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