import React from 'react';
import PropTypes from 'prop-types';

function MediaObject({ header, left, right, children }) {
  return <div className='media-object'>
    <div className='media-object__left'>
      {left}
    </div>
    <div className='media-object__body'>
      {!!header && <div className='media-object__header'>{header}</div>}
      {children}
    </div>

    <div className='media-object__right'>
      {right}
    </div>
  </div>;
}

MediaObject.propTypes = {
  header: PropTypes.node,
  left: PropTypes.node,
  right: PropTypes.node,
  children: PropTypes.node.isRequired
};

export default MediaObject;
