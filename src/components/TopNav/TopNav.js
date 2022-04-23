import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {QuestionButton} from "@templates/TopNavView/QuestionButton";

function TopNav({ brand, right, searchComponent, children }) {
  return <nav className='top-nav'>
    <div className='nav-container container p-0'>
      <Link className='nav-brand' to='/'>{brand}</Link>
      <ul className='nav-menu'>
        {children}
      </ul>

      {searchComponent}

      <div className='nav-right'>
        {right}
      </div>
      <QuestionButton/>
    </div>
  </nav>;
}

TopNav.propTypes = {
  brand: PropTypes.node.isRequired,
  right: PropTypes.node,
  searchComponent: PropTypes.node,
  children: PropTypes.node
};

export default TopNav;
