import { Component } from 'react';
import { connect } from 'react-redux';
import { getComicsForWeek, isLoading } from '../../state/comics/selectors';
import { requestComics } from '../../state/comics/actions';
import Logo from '../Logo/Logo';
import Comics from '../Comics/Comics';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

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
      <div data-selector="wrapper">
        <Logo />
        <Nav />
        <Comics {...props} />
        <Footer />
      </div>
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

export { Page };
export default connect(mapStateToProps, mapDispatchToProps)(Page);
