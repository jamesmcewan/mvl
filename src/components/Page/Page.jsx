import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';
import Comics from '../Comics/Comics';
import Footer from '../Footer/Footer';

const Page = ({ week, comics }) => {
  return (
    <div>
      <Nav week={week} />
      <Comics week={week} comics={comics} />
      <Footer />
    </div>
  );
};

Page.propTypes = {
  week: PropTypes.string.isRequired
};

export default Page;
