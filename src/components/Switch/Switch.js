import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Switch({ name, value, onChange, disabled }) {
  function handleCheckboxChange() {
    if (onChange && !disabled) {
      onChange({
        target: {
          name,
          value: !value
        }
      });
    }
  }

  return <span className={cn('switch', value && 'switch--on', disabled && 'switch--disabled')} onClick={handleCheckboxChange}>
    <input type='checkbox' name={name} checked={value} onChange={handleCheckboxChange} disabled={disabled} />
    <span className='switch__slider' />
  </span>;
}

Switch.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func
};

export default Switch;
