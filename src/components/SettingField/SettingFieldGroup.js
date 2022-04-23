import React from 'react';

function SettingFieldGroup({ header = null, children } ) {
  return <div className='setting-field-group'>
    {!!header && <h2 className='setting-field-group__header'>{header}</h2>}

    <div className='setting-field-group__body'>
      {children}
    </div>
  </div>
}

export default SettingFieldGroup;
