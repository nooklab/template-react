import React from 'react';
import { object, string } from 'yup';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import { FormikField, FormikSubmitButton } from '../../components/not_used_FormField';
import TextInput from '../../components/TextInput';

/**
 * 프로필 설정 폼
 *
 * @param {Object} props
 * @param {Object} props.initialValues 초기 데이터
 * @param {function} props.onSubmit 폼 전송 콜백
 * @param {function} props.onCheckNickname 닉네임 유일성 체크 콜백
 */
function ProfileBioForm({ initialValues = {}, onSubmit, onCheckNickname }) {
  const { t } = useTranslation();

  /**
   * 폼 전송 이벤트 핸들러
   *
   * @param {Object} values
   * @param {Object} actions
   */
  async function handleSubmit(values, actions) {
    if (onSubmit) {
      try {
        await onSubmit(values);
        actions.setSubmitting(false);
      } catch (e) {
        actions.setSubmitting(false);
        throw e;
      }
    }
  }

  /**
   * 아이디 유일성 체크 이벤트 핸들러
   *
   * @param {string} value
   */
  async function handleCheckUniqueNickname(value) {
    if (onCheckNickname) {
      return await onCheckNickname(value);
    }

    return false;
  }

  return <Formik
    initialValues={{
      nickname: initialValues.nickname || '',
      bio: initialValues.bio || ''
    }}
    validationSchema={object().shape({
      nickname: string().nickname().unique(handleCheckUniqueNickname, t('validation.uniqueNickname')).required(t('validation.required')),
      bio: string()
    })}
    onSubmit={handleSubmit}
  >
    <Form autoComplete='off'>
      <FormikField name='nickname' component={TextInput} label={t('ProfileBioForm.nickname')} />
      <FormikField name='bio' component={TextInput} label={t('ProfileBioForm.bio')} rows={3} maxLength={255} />

      <FormikSubmitButton primary={false}>{t('ProfileBioForm.confirm')}</FormikSubmitButton>
    </Form>
  </Formik>;
}

export default ProfileBioForm;
