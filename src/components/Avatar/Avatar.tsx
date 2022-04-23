import React from 'react';
// import PropTypes from 'prop-types';
import avatarPlaceholder from '../../assets/images/avatar-placeholder.png';

type AvatarPropType = {
  size?: string;
  src: any;
}


function Avatar({ size = '1em', src } : AvatarPropType) {
  return (
      <figure className='avatar vector-17' style={{ width: size, height: size, backgroundImage: `url(${src || avatarPlaceholder})` }} />
  );
}

// Avatar.propTypes = {
//   size: PropTypes.string,
//   src: PropTypes.node
// };

export default Avatar;
