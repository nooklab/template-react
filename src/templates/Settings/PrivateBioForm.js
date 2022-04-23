import React from 'react';
import { object, string } from 'yup';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import { FormikField, FormikSubmitButton } from '../../components/not_used_FormField';
import TextInput from '../../components/TextInput';

function PrivateBioForm({ initialValues = {}, onSubmit }) {
  const { t } = useTranslation();

  async function handleSubmit(values, actions) {
    if (onSubmit) {
      try {
        await onSubmit({
          refundBank: {
            name: values.bankName,
            account: values.bankAccount,
            owner: values.bankOwner
          },
          phoneNumber: values.phoneNumber,
          address: values.address
        });
        actions.setSubmitting(false);
      } catch (e) {
        console.error(e);
        actions.setSubmitting(false);
      }
    }
  }

  return <Formik
    initialValues={{
      bankName: initialValues.refundBank ? initialValues.refundBank.name : '',
      bankAccount: initialValues.refundBank ? initialValues.refundBank.account : '',
      bankOwner: initialValues.refundBank ? initialValues.refundBank.owner : '',
      phoneNumber: initialValues.phoneNumber || '',
      address: initialValues.address || ''
    }}
    validationSchema={object().shape({
      bankName: string(),
      bankAccount: string(),
      bankOwner: string(),
      phoneNumber: string(),
      address: string()
    })}
    onSubmit={handleSubmit}
  >
    <Form autoComplete='off'>
      <fieldset className='form-group'>
        <legend className='col-form-label text-muted pb-3'>{t('PrivateBioForm.refundAccount')}</legend>

        <FormikField name='bankName' component={TextInput} label={t('PrivateBioForm.bankName')} />
        <FormikField name='bankAccount' component={TextInput} label={t('PrivateBioForm.bankAccount')} />
        <FormikField name='bankOwner' component={TextInput} label={t('PrivateBioForm.bankOwner')} />
      </fieldset>

      <fieldset className='form-group'>
        <legend className='col-form-label text-muted pb-3'>{t('PrivateBioForm.userContact')}</legend>

        <FormikField name='phoneNumber' component={TextInput} label={t('PrivateBioForm.phoneNumber')} />
        <FormikField name='address' component={TextInput} label={t('PrivateBioForm.address')} />
      </fieldset>

      <FormikSubmitButton primary={false}>{t('PrivateBioForm.confirm')}</FormikSubmitButton>
    </Form>
  </Formik>;
}

export default PrivateBioForm;
