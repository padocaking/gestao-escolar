import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useNavStore from '../Service/useNavStore';

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
    font-weight: 800;
    font-size: 26px;
    text-transform: capitalize;
    cursor: pointer;

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

export default function Header () {

    const navigate = useNavigate()

    const { handleNav } = useNavStore()

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
            <User className='center' onClick={() => navigate('/usuario')}>
                <img src="" alt="User" />
            </User>
        </Container>
    )
}