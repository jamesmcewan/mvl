import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getThisWeeksComics,
  isLoading
} from '../../state/comics/thisWeek/selectors';
import { requestThisWeek } from '../../state/comics/thisWeek/actions';
import Comics from '../../components/Comics/Comics';

class ThisWeek extends Component {
  async componentWillMount() {
    if (this.props.comics.length > 0) {
      return;
    }

    try {
      await this.props.requestThisWeek();
    } catch (err) {}
  }

  render() {
    const { comics, isLoading } = this.props;
    return (
      <>
        <h1>This week</h1>
        <Comics {...{ comics, isLoading }} />
      </>
    );
  }
}

ThisWeek.propTypes = {
  comics: PropTypes.array,
  isLoading: PropTypes.bool
};

const mapPropsToState = state => ({
  comics: getThisWeeksComics(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = {
  requestThisWeek
};

export { ThisWeek };
export default connect(
  mapPropsToState,
  mapDispatchToProps
)(ThisWeek);
