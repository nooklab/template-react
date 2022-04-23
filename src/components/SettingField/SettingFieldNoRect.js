


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function SettingFieldNoRect({ label, help, error, children }) {
  return <div className={cn('setting-field', !!error && 'setting-field--error')}>
    {!!label && <h3 className='setting-field__label'>{label}</h3>}
      <div className='setting-field__tight-content'>
        {children}
      </div>

      {!!help && <div className='setting-field__help'>{help}</div>}
      {!!error && <div className='setting-field__error'>{error}</div>}
    </div>
}

SettingFieldNoRect.propTypes = {
  label: PropTypes.node,
  help: PropTypes.node,
  error: PropTypes.node,
  children: PropTypes.node
};

export default SettingFieldNoRect;
