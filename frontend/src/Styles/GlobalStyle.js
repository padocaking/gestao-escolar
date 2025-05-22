import { createGlobalStyle } from 'styled-components';

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
        --nav-width-opened: 270px;
        --nav-width-closed: 70px;
        --header-height: 60px;
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

export default GlobalStyle