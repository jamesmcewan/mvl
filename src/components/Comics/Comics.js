import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comic from '../Comic/Comic';
import { getComics } from '../../state/comics/selectors';
import { requestComicsIfNeeded } from '../../state/comics/actions';
import ComicsSection from '../../styles/ComicsSection';

class Comics extends Component {
  async componentWillMount() {
    const { comics, requestComicsIfNeeded } = this.props;

    try {
      await requestComicsIfNeeded(comics);
    } catch (err) {}
  }

  render() {
    const { comics } = this.props;
    return (
      <ComicsSection>
        {comics && comics.map(comic => <Comic {...comic} key={comic.id} />)}
      </ComicsSection>
    );
  }
}

const mapPropsToState = state => ({
  comics: getComics(state)
});

const mapDispatchToProps = {
  requestComicsIfNeeded
};

export default connect(
  mapPropsToState,
  mapDispatchToProps
)(Comics);
