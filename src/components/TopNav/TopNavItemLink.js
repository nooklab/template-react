import React from 'react';
import { Link } from 'react-router-dom';
import TopNavItem from './TopNavItem';

function TopNavItemLink({ active, to, children, ...rest }) {
  return <TopNavItem active={active}>
    <Link {...rest} to={to}>{children}</Link>
  </TopNavItem>;
}

export default TopNavItemLink;
