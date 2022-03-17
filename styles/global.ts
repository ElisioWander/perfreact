import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #333333;
        --white: #FFFFFA;
        --pink: #FF3864;
        --yellow: #F3A712;
    }

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px 
        }
    }

    body {
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--white);
        background-color: var(--white);
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    button:hover {
        cursor: pointer;
    }
`