import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getLastWeeksComics,
  isLoading
} from '../../state/comics/lastWeek/selectors';
import { requestLastWeek } from '../../state/comics/lastWeek/actions';
import Comics from '../../components/Comics/Comics';

class LastWeek extends Component {
  async componentWillMount() {
    if (this.props.comics.length > 0) {
      return;
    }

    try {
      await this.props.requestLastWeek();
    } catch (err) {}
  }

  render() {
    const { comics, isLoading } = this.props;
    return (
      <>
        <h1>Last week</h1>
        <Comics {...{ comics, isLoading }} />
      </>
    );
  }
}

LastWeek.propTypes = {
  comics: PropTypes.array,
  isLoading: PropTypes.bool
};

const mapPropsToState = state => ({
  comics: getLastWeeksComics(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = {
  requestLastWeek
};

export { LastWeek };
export default connect(
  mapPropsToState,
  mapDispatchToProps
)(LastWeek);
