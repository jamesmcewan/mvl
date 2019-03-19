import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNextWeeksComics } from '../../state/comics/selectors';
import { requestComicsIfNeeded } from '../../state/comics/actions';
import Comics from '../Comics/Comics';

class NextWeek extends Component {
  async componentWillMount() {
    const { comics, requestComicsIfNeeded } = this.props;

    try {
      await requestComicsIfNeeded(comics, 'nextweek');
    } catch (err) {}
  }

  render() {
    const { comics } = this.props;
    return <Comics {...{ comics }} />;
  }
}

NextWeek.propTypes = {
  comics: PropTypes.array
};

const mapPropsToState = state => ({
  comics: getNextWeeksComics(state)
});

const mapDispatchToProps = {
  requestComicsIfNeeded
};

export { NextWeek };
export default connect(
  mapPropsToState,
  mapDispatchToProps
)(NextWeek);
