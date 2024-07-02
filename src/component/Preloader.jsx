// Preloader.js
import React from 'react';
import { CircleLoader } from 'react-spinners';
import PropTypes from 'prop-types';
const Preloader = ({ loading }) => {
  return (
    <div className="preloader">
      <CircleLoader color={'#36d7b7'} loading={loading} size={60} />
    </div>
  );
};
Preloader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
export default Preloader;
