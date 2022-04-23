import React from 'react';
// import {object, string, bool} from 'yup';
import * as Yup from "yup";
import {Formik, Form} from 'formik';
import {useTranslation} from 'react-i18next';
// import SectionDivider from '../../components/SectionDivider';
import externalLinks from '../../assets/external-links.json';
import {FormikCheckInput, FormikTextInput} from "@components/FormikInput";
import {FormikSubmitButton} from "@components/FormikButton";
import {Link} from "react-router-dom";
import {Spacer2} from "@components/Layout";

/**
 * 회원가입 폼
 *
 * @param {Object} props
 * @param {function} props.onSubmit 회원가입 폼 전송 콜백
 * @param {function} props.onCheckId 아이디 유일성 체크 콜백
 * @param {function} props.onSocialLogIn 소셜 로그인 클릭 콜백
 */
function RegisterAdvertiserForm({onSubmit, onCheckId, onSocialLogIn}) {
    const {t} = useTranslation();
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    // /**
    //  * 구글 로그인 이벤트 핸들러
    //  */
    // function handleGoogleLogIn() {
    //     if (onSocialLogIn) {
    //         onSocialLogIn('google');
    //     }
    // }
    //
    // /**
    //  * 카카오 로그인 이벤트 핸들러
    //  */
    // function handleKakaoLogIn() {
    //     if (onSocialLogIn) {
    //         onSocialLogIn('kakao');
    //     }
    // }

    // /**
    //  * 아이디 유일성 체크 이벤트 핸들러
    //  *
    //  * @param {string} value
    //  */
    // async function handleCheckUniqueId(value) {
    //     if (onCheckId) {
    //         return await onCheckId(value);
    //     }
    //     return false;
    // }

    /**
     * 폼 전송 이벤트 핸들러
     *
     * @param {Object} values
     * @param {Object} actions
     */
    async function handleSubmit(values, actions) {
        if (values.password !== values.passwordConfirm) {
            actions.setSubmitting(false);
            actions.setErrors({
                passwordConfirm: t('RegisterForm.validation.passwordConfirm')
            });
            return;
        }

        // const a = {"receive": {"email": true}, "company": "유리멘탈", "manager": {"email": "김담당", "phone": "010-1234-4567"}}

        if (onSubmit) {
            try {
                await onSubmit({
                    username: values.username,
                    password: values.password,
                    // name: values.name
                    type: 'advertiser',
                    detail: {
                        receive: {
                            email: values.receiveEmail,
                        },
                        company: values.company,
                        manager: {
                            email: values.managerEmail,
                            phone: values.managerPhone,
                        }
                        // receiveEmail: values.receiveEmail,
                        // company: '',
                        // manager: '',
                        // managerEmail: '',
                        // managerPhone: '',
                    }
                });
            } catch (e) {
                actions.setSubmitting(false);
            }
        }
    }

    return <>
        <Formik
            initialValues={{
                username: '',
                password: '',
                passwordConfirm: '',
                naverId: '',
                receiveEmail: 'yes',
                // name: ''
                // pushNotice: 'yes',
                // pushCampaign: 'yes',
                company: '',
                manager: '',
                managerEmail: '',
                managerPhone: '',
                agreement: {
                    usage: false,
                    marketing: false,
                }
            }}
            validateOnMount={true}
            validationSchema={Yup.object().shape({
                username: Yup.string().email(t('validation.email')).required(t('validation.required')),
                password: Yup.string().password().required(t('validation.required')),
                passwordConfirm: Yup.string().when("password", {
                    is: val => (val && val.length > 0),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        t("validation.passwordConfirm")
                    )
                }).required(t('validation.required')),
                // name: string().userId().unique(handleCheckUniqueId, t('validation.uniqueId')).required(t('validation.required'))
                // naverId: string().email(t('validation.email')).required(t('validation.required')),

                company: Yup.string().required(t('validation.company')),
                manager: Yup.string().required(t('validation.manager')),
                managerEmail: Yup.string().email(t('validation.email')).required(t('validation.required')),
                managerPhone: Yup.string().required(t("validation.required"))
                    .matches(phoneRegExp, t('validation.phone'))
                    .min(9, t('validation.phone'))
                    .max(13, t('validation.phone')),
                agreement: Yup.object().shape({
                    usage: Yup.bool().oneOf([true], t('validation.required')),
                })
            })}
            onSubmit={handleSubmit}
        >
            {(formikProps) => {
                return <Form>
                    <div className={'typo-16'}>
                    <FormikTextInput size={16} requiredpost={+true} name='username' label={t("RegisterForm.username")}
                                     // className={'type-16'}
                                     showValid={true}
                                     placeHolder={"이메일을 입력해 주세요"}/>
                    <FormikTextInput size={16} requiredpost={+true} type='password' name='password' label={t("RegisterForm.password")}
                                     showValid={true}
                                     placeHolder={"영문/숫자/특수문자 혼합 6-20자"}/>
                    <Spacer2 pt={-7}/>
                    {/*<FormikTextInput required={true} type='password' name='passwordConfirm' label={t("RegisterForm.passwordConfirm")} placeHolder={"비밀번호 확인"} />*/}
                    <FormikTextInput size={16} requiredpost={+true} type='password' name='passwordConfirm' addLabel={false}
                                     showValid={true}
                                     placeHolder={"비밀번호 확인"}/>

                    <FormikTextInput size={16} requiredpost={+true} type='text' name='company' label={t("RegisterForm.company")}
                                     showValid={true}
                                     placeHolder={"기업명을 입력해 주세요"}/>
                    <FormikTextInput size={16} requiredpost={+true} type='text' name='manager' label={t("RegisterForm.manager")}
                                     showValid={true}
                                     placeHolder={"담당자명을 입력해 주세요"}/>
                    <FormikTextInput size={16} requiredpost={+true} type='text' name='managerEmail'
                                     showValid={true}
                                     label={t("RegisterForm.managerEmail")}
                                     placeHolder={"담당자와 연락 가능한 이메일을 입력해 주세요"}/>
                    {/*<FormikLabelFieldWithAction*/}
                    {/*    required={true}*/}
                    {/*    // disabled={naverConnected}*/}
                    {/*    name='managerPhone'*/}
                    {/*    translate="RegisterForm"*/}
                    {/*    // label={t('RegisterForm.managerPhone')}*/}
                    {/*    action={<button type="button" className="btn btn-dark" disabled>인증요청</button>}*/}
                    {/*/>*/}

                    <FormikTextInput
                        size={16}
                        requiredpost={+true}
                        showValid={true}
                        // disabled={naverConnected}
                        name='managerPhone'
                        // translate="RegisterForm"
                        label={t('RegisterForm.managerPhone')}
                        placeHolder={"담당자와 연락 가능한 연락처를 입력해 주세요"}
                        action={<button type="button" className="btn btn-dark" disabled>인증요청</button>}
                    />

                    {/*<SectionDivider />*/}
                    {/*<FormikInlineRadioInput*/}
                    {/*    type="radio"*/}
                    {/*    name="receiveEmail"*/}
                    {/*    label={t('RegisterForm.receiveEmail')}*/}
                    {/*    selection={[{*/}
                    {/*      value: 'yes',*/}
                    {/*      label: '수신',*/}
                    {/*    },{*/}
                    {/*      value: 'no',*/}
                    {/*      label: '수신안함',*/}
                    {/*    }]}*/}
                    {/*/>*/}

                    <FormikCheckInput name='agreement.usage'
                                      size={16}
                                      requiredpost={+true}
                                      label={<>[필수]&nbsp;
                                          <Link target="_blank"
                                                className='link-dark underline fw-bold'
                                                to={externalLinks.policy}>이용약관</Link> 및&nbsp;
                                          <Link target="_blank"
                                                className='link-dark underline fw-bold'
                                                to={externalLinks.privacy}>개인정보 처리방침</Link>
                                          &nbsp;동의</>}
                    />
                    <FormikCheckInput size={16} name='agreement.marketing' label={t('RegisterForm.agreementMarketing')}/>


                    {/*<SectionDivider/>*/}

                    {/*<p>*/}
                    {/*  <Trans i18nKey='RegisterForm.agreement'>*/}
                    {/*    회원으로 가입하시면 <a href={externalLinks.policy} target="_blank">서비스 약관</a>과 <a href={externalLinks.privacy} target="_blank">개인정보 정책</a>을 읽고 동의한 것으로 간주됩니다.*/}
                    {/*  </Trans>*/}
                    {/*</p>*/}
                    <Spacer2 pt={32}/>

                    <div className="d-grid gap-2">
                        <FormikSubmitButton id="register"
                                            disabled={!formikProps.isValid}
                                            buttonProps="btn-dark">{t('RegisterForm.submit')}</FormikSubmitButton>
                    </div>
                    {/*<FormikSubmitButton fullWidth>{t('RegisterForm.submit')}</FormikSubmitButton>*/}
                    </div>
                </Form>
            }}
        </Formik>


    </>;
}

export default RegisterAdvertiserForm;
