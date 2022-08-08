import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        scrollbar-width: thin;
    }

    html {
  scroll-behavior: smooth;
}



    body {
        font-family: 'Mulish', sans-serif;
        overflow-x: hidden;
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
