import React from 'react';

export default function () {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <rect id="a" width="16" height="16" rx="4"/>
      <path id="c" d="M7.44 11.01a.999.999 0 0 1-1.415 0L4.49 9.475A1 1 0 0 1 5.903 8.06l.83.83 3.363-3.365A.999.999 0 1 1 11.51 6.94L7.44 11.01z"/>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a"/>
      </mask>
      <use fill="#FFF" xlinkHref="#a"/>
      <path fill="#4527C5" d="M0 0h16v16H0z" mask="url(#b)"/>
      <path fill="#4527C5" d="M0 0h16v16H0z" mask="url(#b)"/>
      <path stroke="#000" strokeOpacity=".1" d="M4 .5A3.5 3.5 0 0 0 .5 4v8A3.5 3.5 0 0 0 4 15.5h8a3.5 3.5 0 0 0 3.5-3.5V4A3.5 3.5 0 0 0 12 .5H4z"/>
      <mask id="d" fill="#fff">
        <use xlinkHref="#c"/>
      </mask>
      <g fill="#FFF" mask="url(#d)">
        <path d="M0 0h16v16H0z"/>
      </g>
    </g>
  </svg>;
}
