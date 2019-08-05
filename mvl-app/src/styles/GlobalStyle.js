import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyle = props => (
  <Global
    styles={css`
      html {
        background: ${props.theme.darkBg};
      }

      body {
        color: ${props.theme.primaryText};
        font-family: 'Oswald', sans-serif;
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
    `}
  />
);

export default GlobalStyle;
