import React from 'react';
import PropTypes from 'prop-types';

function DropdownItem({ component = 'div', children, ...props }) {
  const Component = component;

  return <Component className='dropdown-item' {...props}>
    {children}
  </Component>;
}

DropdownItem.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  children: PropTypes.node
};

export default DropdownItem;
