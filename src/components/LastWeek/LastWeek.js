import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLastWeeksComics } from '../../state/comics/selectors';
import { requestComicsIfNeeded } from '../../state/comics/actions';
import Comics from '../Comics/Comics';

class LastWeek extends Component {
  async componentWillMount() {
    const { comics, requestComicsIfNeeded } = this.props;

    try {
      await requestComicsIfNeeded(comics, 'lastweek');
    } catch (err) {}
  }

  render() {
    const { comics } = this.props;
    return <Comics {...{ comics }} />;
  }
}

LastWeek.propTypes = {
  comics: PropTypes.array
};

const mapPropsToState = state => ({
  comics: getLastWeeksComics(state)
});

const mapDispatchToProps = {
  requestComicsIfNeeded
};

export { LastWeek };
export default connect(
  mapPropsToState,
  mapDispatchToProps
)(LastWeek);
