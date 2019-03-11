import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background: #151617 linear-gradient(#1a0f21, #151617 70%) no-repeat;
  }

  body {
    color: #ccd3dc;
    font-family: "IBM Plex Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5em;
    padding: 0;
    margin: 0;

    @media screen and (min-width: 700px) {
      font-size: 20px;
    }
  }
`;

export default GlobalStyle;
