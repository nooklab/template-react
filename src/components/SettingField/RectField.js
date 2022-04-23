import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function RectField({ label, help, error, children, className }) {
  return <div className={cn('setting-field', className)}>

    <div className='setting-field__body2'>
      <div className='setting-field__content'>
        {children}
      </div>
    </div>
  </div>
}

RectField.propTypes = {
  label: PropTypes.node,
  help: PropTypes.node,
  error: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.node,
};

export default RectField;
