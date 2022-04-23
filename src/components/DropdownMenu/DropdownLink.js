import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DropdownLink({ to, children }) {
  return <Link className='dropdown-item' to={to}>{children}</Link>;
}

DropdownLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default DropdownLink;
