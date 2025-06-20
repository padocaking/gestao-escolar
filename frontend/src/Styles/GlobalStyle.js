import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --background: linear-gradient(45deg, #D7DBE8, #EBEFF0);
        --white: #FFFFFF;
        --light-gray: #FAFAFA;
        --bluish-gray: #EFF0F6;
        --gray:rgb(76, 78, 83);
        --black: #333333;
        --main: #4A3AFF;
        --main-one:rgb(66, 54, 204);
        --main-two: #170F49;
        --main-three: #6F6C90;
        --second: #D9DBE9;
        --nav-width-opened: 300px;
        --nav-width-closed: 70px;
        --header-height: 60px;
        --footer-height: 125px;
        --main-height: calc(100vh - var(--header-height));
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
        transition: all 0.2s ease-in-out;
    }

    button {
        border: none;
        cursor: pointer;
    }

    body {
        min-height: var(--main-height);
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Content = styled.div`
    background-color: rgba(255, 255, 255, 0.15);
    //box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border-radius: 5px;
    overflow: hidden;
`

const titleAnim = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const Title = styled.h1`
    color: var(--black);
    font-size: 48px;
    padding-bottom: 2rem;
    animation: ${titleAnim} 0.4s ease-out;
`

export default GlobalStyle