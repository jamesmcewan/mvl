import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getComicsForWeek, isLoading } from '../../state/comics/selectors';
import { requestComics } from '../../state/comics/actions';
import Logo from '../Logo/Logo';
import Comics from '../Comics/Comics';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
`;

class Page extends Component {
  async componentDidMount() {
    const { comics, requestComics } = this.props;
    if (comics && comics.length > 0) {
      return;
    }

    try {
      await requestComics();
    } catch (err) {}
  }

  render() {
    const { props } = this;

    return (
      <Wrapper>
        <Logo />
        <Nav />
        <Comics {...props} />
        <Footer />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  comics: getComicsForWeek(state, ownProps.weekId),
  isLoading: isLoading(state, ownProps.weekId)
});

const mapDispatchToProps = {
  requestComics
};

export { Page, Wrapper };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
