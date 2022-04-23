import React from 'react';
import cn from 'classnames';

function TopNavItem({ active, children }) {
  return <li className={cn('top-nav-item', active && 'top-nav-item--active')}>
    {children}
  </li>
}

export default TopNavItem;
