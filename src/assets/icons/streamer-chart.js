import React from 'react';

export default function () {
  return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 20 20">
    <defs>
      <path id="a" d="M0 0h20v20H0z"/>
    </defs>
    <g fillRule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a"/>
      </mask>
      <path d="M10.437 4.354a.781.781 0 1 1-.821 1.329 3.812 3.812 0 0 0-4.008 0 .781.781 0 1 1-.822-1.33 5.372 5.372 0 0 1 2.826-.8c1 0 1.976.277 2.825.8m-9.39-1.258A8.495 8.495 0 0 1 7.613 0a8.496 8.496 0 0 1 6.563 3.095.781.781 0 0 1-1.204.996 6.937 6.937 0 0 0-5.36-2.528c-2.076 0-4.03.921-5.36 2.528a.781.781 0 1 1-1.203-.996m17.698 4.23l-3.523 2.677V7.948a.781.781 0 0 0-.781-.782H.782A.781.781 0 0 0 0 7.948v11.271c0 .431.35.781.781.781h13.661c.431 0 .781-.35.781-.78v-2.056l3.523 2.677A.782.782 0 0 0 20 19.219V7.948a.782.782 0 0 0-1.254-.622" mask="url(#b)"/>
    </g>
  </svg>;
}