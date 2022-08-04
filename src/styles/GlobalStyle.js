import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        @media(max-width: 1300px){
            font-size: 80%;
        }
        @media(max-width: 1100px){
            /* background: pink; */
        }
    }

    body {
        font-family: 'Mulish', sans-serif;
    }

    iframe {
        margin: 0px; 
        padding: 0px; 
        height: 100%; 
        width: 100%;
        border: none;
    }

    button {
        cursor: pointer;
    }

    ul {
      list-style: none;
    }

    a {
            text-decoration: none;
        }
`;

export default GlobalStyle;
