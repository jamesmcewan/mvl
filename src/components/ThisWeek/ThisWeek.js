import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getThisWeeksComics } from '../../state/comics/selectors';
import { requestComicsIfNeeded } from '../../state/comics/actions';
import Comics from '../Comics/Comics';

class ThisWeek extends Component {
  async componentWillMount() {
    const { comics, requestComicsIfNeeded } = this.props;

    try {
      await requestComicsIfNeeded(comics, 'thisweek');
    } catch (err) {}
  }

  render() {
    const { comics } = this.props;
    return <Comics {...{ comics }} />;
  }
}

ThisWeek.propTypes = {
  comics: PropTypes.array
};

const mapPropsToState = state => ({
  comics: getThisWeeksComics(state)
});

const mapDispatchToProps = {
  requestComicsIfNeeded
};

export { ThisWeek };
export default connect(
  mapPropsToState,
  mapDispatchToProps
)(ThisWeek);
