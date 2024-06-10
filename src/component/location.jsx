import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Proptypes from 'prop-types';
function capitalizeString(str) {
  if (str.length === 0) {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
export default function Location({ name }) {
  let location = useLocation().pathname;
  location = capitalizeString(location.substr(1));
  return (
    <section className="content-address">
      <Link to="/home" className="location">
        <FaHome className="home-logo" />
      </Link>
      /
      <p to={location} className="location">
        {' '}
        {name}{' '}
      </p>
    </section>
  );
}
Location.propTypes = {
  name: Proptypes.string.isRequired,
};
