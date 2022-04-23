import React from 'react';

function DropdownButton({ children, ...props }) {
  return <button type='button' className='dropdown-item' {...props}>
    {children}
  </button>;
}

export default DropdownButton;
