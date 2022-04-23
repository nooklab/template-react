import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../Switch';

function DropdownSwitch({ value, onChange, children }) {
  function handleClick(e) {
    e.stopPropagation();

    if (onChange) {
      onChange(!value);
    }
  }

  return <button className='dropdown-item dropdown-switch' onClick={handleClick}>
    {children}

    <Switch value={value} />
  </button>;
}

DropdownSwitch.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default DropdownSwitch;
