import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * 비밀번호 변경 폼
 *
 * @param {Object} props
 * @param {function} props.onSubmit 비밀번호 변경 버튼 클릭 콜백
 */
// function PasswordResetForm({ onSubmit }) {
export const PasswordResetForm = (props) => {
  const { t } = useTranslation();
  const {onSubmit} = props

  function handleSubmit() {
    if (onSubmit) {
      onSubmit();
    }
  }

  return <div className="m-2">
    <button type='button' className='btn btn-secondary m-2' onClick={handleSubmit}>
      {t('PasswordResetForm.resetPassword')}
    </button>
  </div>;
}

// export default PasswordResetForm;
