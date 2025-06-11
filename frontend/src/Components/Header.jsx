import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useNavStore from '../Service/useNavStore';
import UserDefaultIcon from '../Images/iconmini.png';
import Logomini from '../Images/logomini.png';

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
    z-index: 999;
`

const Logo = styled.picture`
    cursor: pointer;

    @media (max-width: 900px) {
        display: none;
    }
`

const User = styled.picture`
    background-color: #dddddd;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
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

export default function Header () {

    const navigate = useNavigate()

    const { handleNav } = useNavStore()

    return (
        <Container>
            <Logo className='logo' onClick={() => navigate('/')}>
                <img src={Logomini} alt="Logo" />
            </Logo>
            <MenuBar onClick={handleNav}>
                <div></div>
                <div></div>
                <div></div>
            </MenuBar>
            <User className='center' onClick={() => navigate('/usuario')}>
                <img src={UserDefaultIcon} alt="User" />
            </User>
        </Container>
    )
}