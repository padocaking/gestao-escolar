import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
    position: fixed;
    height: var(--header-height);
    width: 100%;
    background-color: var(--light-gray);
    border-bottom: 1px solid var(--second);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    transform: ${props => props.hide ? 'translateY(-100%)' : 'translateY(0)'};
    transition: transform 0.2s linear;
    overflow: hidden;
    z-index: 100;
`

const Logo = styled.picture`
    font-weight: 800;
    font-size: 26px;
    text-transform: capitalize;
    cursor: pointer;
`

const User = styled.picture`
    background-color: #EEEEEE;
    color: #EEEEEE;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:after {
        position: absolute;
        content: '';
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #BABABA;
        top: 8px;
    }

    &:before {
        position: absolute;
        content: '';
        width: 30px;
        height: 20px;
        border-radius: 50%;
        background-color: #BABABA;
        bottom: -8px;
    }
`

export default function Header () {

    const navigate = useNavigate()

    const [hide, setHide] = useState(false)
    const [lastScroll, setLastScroll] = useState(0)

    //useEffect(() => {
    //    const handleScroll = () => {
    //        const currentScroll = window.scrollY
    //
    //        if (currentScroll > lastScroll && currentScroll > 40) {
    //            setHide(true)
    //        } else {
    //            setHide(false)
    //        }
    //
    //        setLastScroll(currentScroll)
    //    }
    //
    //    window.addEventListener('scroll', handleScroll)
    //
    //    return () => window.removeEventListener('scroll', handleScroll)
    //
    //}, [lastScroll])

    return (
        <Container>
            <Logo onClick={() => navigate('/')}>
                <img src="" alt="Logo" />
            </Logo>
            <User className='center' onClick={() => navigate('/usuario')}>
                <img src="" alt="User" />
            </User>
        </Container>
    )
}