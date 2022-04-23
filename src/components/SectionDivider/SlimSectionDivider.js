import React from 'react';
import { useTranslation } from 'react-i18next';

function SlimSectionDivider(props) {
  const {className} = props
  const { t } = useTranslation();

  return <div className='slim-section-divider'>
    <span className={'slim-section-divider__line ' + className} />
  </div>;
}

export default SlimSectionDivider;
