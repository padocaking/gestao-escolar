import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useNavStore from '../Service/useNavStore';
import { useAuth } from '../Service/AuthContext';

const Container = styled.header`
    position: fixed;
    height: var(--header-height);
    width: 100%;
    background-color: #334AA4;
    border-bottom: 1px solid var(--second);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    transform: ${props => props.hide ? 'translateY(-100%)' : 'translateY(0)'};
    transition: transform 0.2s linear;
    z-index: 999;
`

const Logo = styled.picture`
    font-weight: 800;
    font-size: 26px;
    text-transform: capitalize;
    cursor: pointer;
    color: white;

    @media (max-width: 900px) {
        display: none;
    }
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

const MenuBar = styled.div`
    display: none;
    width: 20px;
    cursor: pointer;

    div {
        height: 3px;
        width: 100%;
        background-color: var(--black);
        border-radius: 15px;
    }

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
`

const UserInfo = styled.div`
    position: absolute;
    z-index: 999;
    background-color: var(--white);
    color: var(--black);
    width: 150px;
    display: flex;
    flex-direction: column;
    top: 55px;
    right: 10px;
    font-weight: 500;
    border-radius: 4px;
    overflow: hidden;
    max-height: ${props => props.open ? '100px' : '0px'};

    span {
        padding: 15px;
        cursor: pointer;
        background-color: #f1f1f1;

        &:hover {
            background-color: #f7f7f7;
            font-weight: 600;
        }
    }
`

export default function Header () {

    const navigate = useNavigate()

    const { logout } = useAuth()

    const { handleNav } = useNavStore()

    const [opened, setOpened] = useState(false)

    useEffect(() => {
        function handleClickOutside(e) {
            if (!e.target.closest('#user-menu') && !e.target.closest('#user-icon')) {
            setOpened(false)
            }
        }

        if (opened) {
            document.addEventListener('click', handleClickOutside)
        } else {
            document.removeEventListener('click', handleClickOutside)
        }

        return () => document.removeEventListener('click', handleClickOutside)
    }, [opened])

    return (
        <Container>
            <Logo className='logo' onClick={() => navigate('/')}>
                <img src="" alt="Logo" />
            </Logo>
            <MenuBar onClick={handleNav}>
                <div></div>
                <div></div>
                <div></div>
            </MenuBar>
            <User id="user-icon" className='center' onClick={() => setOpened(prev => !prev)}>
                <img src="" alt="User" />
            </User>
            <UserInfo id="user-menu" open={opened}>
                <span onClick={() => navigate('/usuario')}>👤 Perfil</span>
                <span onClick={() => {
                    logout()
                    navigate('/login')
                }}>⏻&nbsp; Sair</span>
            </UserInfo>
        </Container>
    )
}