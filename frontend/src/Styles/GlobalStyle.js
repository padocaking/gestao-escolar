import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --background: linear-gradient(45deg, #D7DBE8, #EBEFF0);
        --white: #FFFFFF;
        --main: #4A3AFF;
        --main-two: #170F49;
        --main-three: #6F6C90;
        --second: #D9DBE9;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
        transition: all 0.2s ease-in-out;
    }

    body {
        min-height: 100vh;
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default GlobalStyle