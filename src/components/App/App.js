import React from 'react';
import { ThemeProvider } from 'styled-components';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';
import GlobalStyle from '../../styles/GlobalStyle';
import Wrapper from '../../styles/Wrapper';
import theme from '../../styles/theme';
import Routes from '../Routes/Routes';
import Nav from '../Nav/Nav';

const App = () => {
  return (
    <>
      <ThemeProvider {...{ theme }}>
        <Wrapper>
          <GlobalStyle />
          <Logo />
          <Nav />
          <Routes />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
