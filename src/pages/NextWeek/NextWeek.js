import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getNextWeeksComics,
  isLoading
} from '../../state/comics/nextWeek/selectors';
import { requestNextWeek } from '../../state/comics/nextWeek/actions';
import Comics from '../../components/Comics/Comics';

class NextWeek extends Component {
  async componentWillMount() {
    if (this.props.comics.length > 0) {
      return;
    }

    try {
      await this.props.requestNextWeek();
    } catch (err) {}
  }

  render() {
    const { comics, isLoading } = this.props;
    return (
      <>
        <h1>Next week</h1>
        <Comics {...{ comics, isLoading }} />
      </>
    );
  }
}

NextWeek.propTypes = {
  comics: PropTypes.array,
  isLoading: PropTypes.bool
};

const mapPropsToState = state => ({
  comics: getNextWeeksComics(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = {
  requestNextWeek
};

export { NextWeek };
export default connect(
  mapPropsToState,
  mapDispatchToProps
)(NextWeek);
