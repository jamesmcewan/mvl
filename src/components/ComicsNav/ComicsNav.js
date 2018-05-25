import React, { Component } from 'react';
import styled from 'styled-components';
// import Link from 'react-router-dom';
import { Comics } from '..';
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
      url: '/'
    }
  }

  state = {
    comics: [],
    isSpotlightVisible: false,
    comicsLoading: true
  }

  getMarvelData = dateDescriptor => {
    getData(dateDescriptor)
      .then(res => {
        const { comics } = res;
        return this.setState({
          comics,
          comicsLoading: false
        });
      })
      .catch(err => console.log(err));
  };

  resetComics = () => {
    return this.setState({
      comics: [],
      comicsLoading: true
    })
  }

  componentWillMount() {
    const { match: { url }} = this.props;
    this.resetComics();
    if (url === '/') {
      this.getMarvelData('/');
      return;
    }

    this.getMarvelData(url);
  }


  render() {
    const { comics, comicsLoading } = this.state;

    return (
      <ComicsGrid>
        {comicsLoading && <Loading /> }
        {!comicsLoading && <Comics {...{ comics }} /> }
      </ComicsGrid>
    )
  }
}