import React, { Component } from 'react';
import styled from 'styled-components';
// import Link from 'react-router-dom';
import { Comics, Spotlight } from '..';
import getData from '../../getData';
import Loading from '../Loading/Loading';

const ComicsGrid = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    padding-top: 170px;
  }
`;

export default class ComicsNav extends Component {
  static defaultProps = {
    match: {
      url: '/',
    },
  };

  state = {
    comics: [],
    isSpotlightVisible: false,
    comicsLoading: true,
    spotlight: {},
  };

  getMarvelData = dateDescriptor => {
    getData(dateDescriptor)
      .then(res => {
        const { comics } = res;
        return this.setState({
          comics,
          comicsLoading: false,
        });
      })
      .catch(err => console.log(err));
  };

  resetComics = () => {
    return this.setState({
      comics: [],
      comicsLoading: true,
    });
  };

  componentWillMount() {
    const {
      match: { url },
    } = this.props;
    this.resetComics();

    if (url === '/') {
      this.getMarvelData('/thisweek');
      return;
    }

    this.getMarvelData(url);
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
    const { comics, comicsLoading, isSpotlightVisible, spotlight } = this.state;

    return (
      <ComicsGrid>
        {comicsLoading && <Loading />}
        {!comicsLoading && (
          <Comics {...{ comics }} changeSpotlight={this.changeSpotlight} />
        )}
        {isSpotlightVisible && (
          <Spotlight {...spotlight} close={this.closeSpotlight} />
        )}
      </ComicsGrid>
    );
  }
}
