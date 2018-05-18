import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import getData from '../../getData';
import Comics from '../Comics/Comics';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Spotlight from '../Spotlight/Spotlight';

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

const ComicsGrid = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    padding-top: 170px;
  }
`;

class App extends Component {
  state = {
    attributionText: '',
    comics: [],
    dateDescriptor: 'thisWeek',
    dateDescriptors: ['Last Week', 'This Week', 'Next Week'],
    spotlight: {},
    isSpotlightVisible: false,
  };

  getMarvelData = dateDescriptor => {
    getData(dateDescriptor)
      .then(res => {
        const { attributionText, comics } = res;
        return this.setState({
          attributionText,
          comics,
        });
      })
      .catch(err => console.log(err));
  };

  handleClick = (e, dateDescriptor) => {
    e.preventDefault();
    this.setState({ dateDescriptor, isSpotlightVisible: false });
    this.getMarvelData(dateDescriptor);
  };

  componentWillMount() {
    this.getMarvelData('thisWeek');
  }

  changeSpotlight = (e, comicId) => {
    e.preventDefault();
    const comics = [...this.state.comics];
    const result = comics.filter(comic => comic.id === comicId);

    const [
      {
        description,
        title,
        thumbnail,
        creators: { items },
        diamondCode,
        urls,
        dates,
      },
    ] = result;

    const spotlight = {
      description,
      title,
      thumbnail,
      creators: items,
      diamondCode,
      urls,
      dates,
    };

    this.setState({
      spotlight,
      isSpotlightVisible: true,
    });

    window.scrollTo(0, 0);
  };

  closeSpotlight = e => {
    e.preventDefault();
    this.setState({
      spotlight: {},
      isSpotlightVisible: false,
    });
  };

  render() {
    const { comics, isSpotlightVisible, spotlight, attributionText, dateDescriptor, dateDescriptors } = this.state;
    const { title, description, thumbnail, creators, diamondCode, urls } = spotlight;
    return (
      <div>
        <Navigation {...{dateDescriptor, dateDescriptors, handleClick: this.handleClick}} />
        <ComicsGrid>
          <Comics {...{comics, isSpotlightVisible, changeSpotlight: this.changeSpotlight}} />
          { isSpotlightVisible && 
            <Spotlight {...{title, description, thumbnail, creators, diamondCode, urls, close: this.closeSpotlight}} /> 
          }
        </ComicsGrid>
        <Footer {...{attributionText}} />
      </div>
    );
  }
}

export default App;
