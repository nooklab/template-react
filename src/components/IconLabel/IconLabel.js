import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function IconLabel({ icon, iconComponent, label, brand = false, reversed = false }) {
  let iconElement = null;

  if (!icon) {
    return <span className='icon-label'>
      <span className='icon-label__label'>{label}</span>
    </span>;
  }

  try {
    const Asset = require('../../assets/icons/' + icon).default;
    iconElement = <span className='icon-label__icon'><Asset /></span>;
  } catch (e) {
    // const prefix = brand ? 'fab fa-' : 'fas fa-';
    // iconElement = <span className='icon-label__icon'><span className={prefix + icon} /></span>;
    // iconElement = <span className="material-icons">{icon}</span>
    iconElement = iconComponent || <></>
  }

  return <span className={cn('icon-label', reversed && 'icon-label--reversed')}>
    {!reversed && iconElement}
    <span className={cn('icon-label__label', label === undefined && 'icon-label__label--empty')}>{label}</span>
    {reversed && iconElement}
  </span>;
}

IconLabel.propTypes = {
  icon: PropTypes.string,
  iconComponent: PropTypes.node,
  label: PropTypes.node,
  brand: PropTypes.bool,
  reversed: PropTypes.bool
};

export default IconLabel;
