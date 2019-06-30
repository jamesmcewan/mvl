import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import Routes from '../Routes/Routes';

const App = () => {
  return (
    <>
      <ThemeProvider {...{ theme }}>
        <>
          <GlobalStyle />
          <Routes />
        </>
      </ThemeProvider>
    </>
  );
};

export default App;
