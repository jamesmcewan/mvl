import React, { Component, Fragment } from 'react';
import { injectGlobal } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation, Footer, ComicsNav } from '..';

injectGlobal`
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

class App extends Component {
  state = {
    attributionText: '© Marvel',
  };

  render() {
    const { attributionText } = this.state;

    return (
      <Router>
        <Fragment>
          <Navigation />
          <Route exact path="/" component={ComicsNav} />
          <Route path="/thisweek" component={ComicsNav} />
          <Route path="/lastweek" component={ComicsNav} />
          <Route path="/nextweek" component={ComicsNav} />
          <Footer {...{ attributionText }} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
