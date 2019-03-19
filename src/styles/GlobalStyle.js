import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background: ${props => props.theme.darkBg};
  }

  body {
    color: ${props => props.theme.primaryText};
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
