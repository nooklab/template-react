// import React from 'react';
// import {object, string} from 'yup';
// import {Formik, Form} from 'formik';
// import {useTranslation} from 'react-i18next';
// // import {FormikField, FormikSubmitButton} from '../../components/not_used_FormField';
// import {Typography} from "@templates/Home/components";
//
// /**
//  * 비밀번호 재설정 전송용 이메일 입력폼
//  *
//  * @param {Object} props
//  * @param {function} onSubmit 입력 완료 콜백
//  */
//
// import './SendPassword.scss'
// import {Spacer2} from "@components/Layout";
// import {Row} from "react-bootstrap";
//
//
// function SendPasswordResetForm({onSubmit}) {
//     const {t} = useTranslation();
//
//     async function handleSubmit(values, actions) {
//         if (onSubmit) {
//             try {
//                 await onSubmit({
//                     email: values.email
//                 });
//             } catch (e) {
//                 actions.setSubmitting(false);
//             }
//         }
//     }
//
//     return <Formik
//         initialValues={{
//             email: ''
//         }}
//         validationSchema={object().shape({
//             email: string().email(t('validation.email')).required(t('validation.required'))
//         })}
//         onSubmit={handleSubmit}
//     >
//         <Form>
//             <div className="container ">
//                 <Spacer2 pt={140}/>
//                 <div className='d-flex flex-row justify-content-start'>
//                     <Typography size={26} center bold label='비밀번호 초기화'/>
//                 </div>
//                 <Spacer2 pt={30}/>
//                 <Row>
//                     <Typography size={18} label={t('SendPasswordResetForm.email')}/>
//                     <FormikField className="form-control md-8" name='email' label={''} autoFocus/>
//                 </Row>
//                 <Spacer2 pt={30}/>
//                 <Row>
//                     <FormikSubmitButton fullWidth>{t('SendPasswordResetForm.submit')}</FormikSubmitButton>
//                 </Row>
//                 <Spacer2 pt={240}/>
//             </div>
//         </Form>
//     </Formik>
// }
//
// export default SendPasswordResetForm;
