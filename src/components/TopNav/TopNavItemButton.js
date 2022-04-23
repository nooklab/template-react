import React from 'react';
import TopNavItem from './TopNavItem';

function TopNavItemButton({ onClick, children }) {
  return <TopNavItem>
    <button type='button' onClick={onClick}>{children}</button>
  </TopNavItem>;
}

export default TopNavItemButton;
