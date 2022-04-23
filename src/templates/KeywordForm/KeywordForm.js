import React from 'react';
import { object, string } from 'yup';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import { FormikField, FormikSubmitButton } from '../../components/not_used_FormField';
import TextInput from '../../components/TextInput';

function KeywordForm({ initialValues = {}, onSubmit }) {
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

                <div className="input-group">
                    {/*<span className="input-group-text">Keyword Group 1</span>*/}
                    <FormikField name='keyword1' type="text" aria-label="First name" className="form-control" placeholder={t("Campaign.keywordPlaceHolder")}/>
                    <FormikField name='keyword2' type="text" aria-label="Last name" className="form-control" placeholder={t("Campaign.keywordPlaceHolder")}/>
                </div>
            </fieldset>
            <fieldset className='form-group'>
                <div className="input-group">
                {/*<span className="input-group-text">Keyword Group 2</span>*/}
                <FormikField name='keyword3' type="text" aria-label="Last name" className="form-control" placeholder={t("Campaign.keywordPlaceHolder")}/>
                <FormikField name='keyword4' type="text" aria-label="Last name" className="form-control" placeholder={t("Campaign.keywordPlaceHolder")}/>
                <FormikField name='keyword5' type="text" aria-label="Last name" className="form-control" placeholder={t("Campaign.keywordPlaceHolder")}/>
                </div>
            </fieldset>

            {/*<FormikSubmitButton primary={false}>{t('PrivateBioForm.confirm')}</FormikSubmitButton>*/}
        </Form>
    </Formik>;
}

export default KeywordForm;
