import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Comics, Spotlight } from '..';
import Loading from '../Loading/Loading';
import { getComics, openSpotlight, closeSpotlight } from '../../actions/comics';

const ComicsGrid = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    padding-top: 170px;
  }
`;

class ComicsNav extends Component {
  componentDidMount() {
    const { getComics, comicsLoaded } = this.props;
    if (!comicsLoaded) {
      getComics('thisWeek');
    }
  }

  render() {
    const {
      comics,
      comicsLoaded,
      isSpotlightVisible,
      spotlight,
      openSpotlight,
      closeSpotlight,
    } = this.props;

    return (
      <ComicsGrid>
        {!comicsLoaded && <Loading />}
        {comicsLoaded && (
          <Comics {...{ comics }} changeSpotlight={openSpotlight} />
        )}
        {isSpotlightVisible && (
          <Spotlight {...spotlight} close={closeSpotlight} />
        )}
      </ComicsGrid>
    );
  }
}

const mapStateToProps = state => {
  return {
    comics: state.comics.comics,
    comicsLoaded: state.comics.comicsLoaded,
    isSpotlightVisible: state.comics.isSpotlightVisible,
    spotlight: state.comics.spotlight,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getComics, openSpotlight, closeSpotlight }, dispatch);

export { ComicsNav };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComicsNav);
