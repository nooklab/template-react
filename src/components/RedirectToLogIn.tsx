import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';

/**
 * 로그인 리디렉트 컴포넌트
 * 로그인 후 현재 페이지로 되돌아올 수 있도록 로그인 페이지로 이동함. 
 * 
 * @param {Object} props 
 * @param {boolean} props.redirect 로그인 페이지로 이동할 것인지 여부
 */
function RedirectToLogIn({ redirect = true }) {
  const location = useLocation();

  if (redirect) {
    return <Redirect 
      to={{
        pathname: '/login',
        state: { from: location }
      }}
    />;
  } else {
    return <></>;
  }
}

export default RedirectToLogIn;
