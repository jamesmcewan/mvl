import React from 'react';
import { ThemeProvider } from 'styled-components';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';
import GlobalStyle from '../../styles/GlobalStyle';
import Comics from '../Comics/Comics';
import Wrapper from '../../styles/Wrapper';
import theme from '../../styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider {...{ theme }}>
        <Wrapper>
          <GlobalStyle />
          <Logo />
          <Comics />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
