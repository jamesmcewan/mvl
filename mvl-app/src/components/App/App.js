import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
import Routes from '../Routes/Routes';

const App = () => {
  return (
    <>
      <ThemeProvider {...{ theme }}>
        <>
          <GlobalStyle {...{ theme }} />
          <Routes />
        </>
      </ThemeProvider>
    </>
  );
};

export default App;
