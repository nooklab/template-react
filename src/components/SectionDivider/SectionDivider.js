import React from 'react';
import { useTranslation } from 'react-i18next';

function SectionDivider({ children }) {
  const { t } = useTranslation();

  return <div className='section-divider'>
    <span className='section-divider__line' />
    <span className='section-divider__label'>{children || t('SectionDivider.or')}</span>
    <span className='section-divider__line' />
  </div>;
}

export default SectionDivider;
