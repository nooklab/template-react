import React, {useContext, useEffect, useState} from 'react';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import {useTranslation, Trans} from 'react-i18next';
import SectionDivider from '../../components/SectionDivider';
import externalLinks from '../../assets/external-links.json';
import {FormikInlineRadioInput, FormikTextInput} from "@components/FormikInput"
import LoadingBox from "@components/LoadingBox";
import {FormikSubmitButton} from "@components/FormikButton";
import {FormikTagSelect} from "@components/FormikCommon";
import {useAlert} from "@components/Alert";




const favoriteKeywords = [
    '게임', '남성패션', '다이어트', '레저', '맛집/카페', '문화생활', '반려동물', '뷰티',
    '생활/주방', '숙박', '스포츠'
]

/**
 * 회원가입 폼
 *
 * @param {Object} props
 */

const RegisterBloggerForm = (props) => {
    const {onSubmit, onCheckNaverId, onSocialLogIn} = props
    const {t} = useTranslation();
    const alert = useAlert()
    const [naverConnected, setNaverConnected] = useState(false)
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        // if (favoriteKeywords.length === 0) {
        //     setLoading(true)
        //     campaignStore.loadMiscellaneous().then(() => {
        //         setLoading(false)
        //     })
        // }
    }, [])

    if (loading) {
        return <LoadingBox/>
    }

    async function handleValidNaverId(value) {
        if (!value) {
            return false
        }
        if (naverConnected) {
            return true
        }
        if (onCheckNaverId) {
            const res = await onCheckNaverId(value);
            if (res.result) {
                // 확인 됨
                setNaverConnected(true)
                return true
            }
            // return !!res.result;
        }
        return false;
    }

    async function disconnectNaver(formik) {
        formik.setFieldValue('naverId', '')
        setNaverConnected(false)
    }

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

        if (onSubmit) {
            try {
                await onSubmit({
                    username: values.username,
                    password: values.password,
                    // name: values.name
                    type: 'blogger',
                    channelKey: values.naverId,
                    receive: {
                        email: values.receiveEmail,
                    },
                    push: {
                        notice: values.pushNotice,
                        campaign: values.pushCampaign,
                    },
                    // receiveEmail: values.receiveEmail,
                    // pushNotice: values.pushNotice,
                    // pushCampaign: values.pushCampaign,
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
                pushNotice: 'yes',
                pushCampaign: 'yes',
                age: '',
                region: '',
                gender: '',
                topics: [],
            }}
            validationSchema={Yup.object().shape({
                username: Yup.string().email(t('validation.email')).required(t('validation.required')),
                password: Yup.string().password().required(t('validation.required')),
                passwordConfirm: Yup.string().required(t('validation.required')),
                naverId: Yup.string().test('test-naver', t('validation.uniqueId'), handleValidNaverId).required(t('validation.required')),
                age: Yup.string().required(t('validation.required')),
                gender: Yup.string().required(t('validation.required')),
                region: Yup.string().required(t('validation.required')),
                topics: Yup.array().min(1, "최소한 1개를 선택하세요").max(3, "최대 3개까지만 선택하세요")
            })}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
            validateOnMount={false}
        >
            {/*{({errors, touched, validateField, validateForm}) => (*/}
            {(formik) => (

                <Form>
                    <FormikTextInput required={true} name='username' label={t('RegisterForm.username')}/>
                    <FormikTextInput required={true} name='password' type="password" label={t('RegisterForm.password')} />
                    <FormikTextInput required={true} name='passwordConfirm' type="password" label={t('RegisterForm.passwordConfirm')} />
                    <div className="row">
                        <div className="col">
                            {/*<FormikLabelFieldWithAction*/}
                            {/*    required={true}*/}
                            {/*    translate="RegisterForm"*/}
                            {/*    // placeholder={t('RegisterForm.placeholder.naverId')}*/}
                            {/*    disabled={naverConnected}*/}
                            {/*    name='naverId'*/}
                            {/*    // label={t('RegisterForm.naverId')}*/}
                            {/*    action={!naverConnected ?*/}
                            {/*        <button type="button"*/}
                            {/*                onClick={() => formik.validateField('naverId')}*/}
                            {/*                className="btn btn-dark">연동하기</button> :*/}
                            {/*        <button type="button"*/}
                            {/*                onClick={() => disconnectNaver(formik)}*/}
                            {/*                className="btn btn-dark">해제하기</button>}*/}
                            {/*/>*/}
                            <FormikTextInput
                                required={true}
                                name='naverId'
                                label={t('RegisterForm.naverId')}
                            />
                        </div>
                    </div>


                    <FormikInlineRadioInput required={true} type="radio" name="gender" label={t('RegisterForm.gender')}
                                            selection={[{
                                                value: 'male',
                                                label: '남자',
                                            }, {
                                                value: 'female',
                                                label: '여자',
                                            }, {
                                                value: 'none',
                                                label: '기타',
                                            }]}
                    />

                    <div className="mt-3" >
                    <FormikTextInput required={true} component="select" name="age" label="나이" defaultValue={"0"}>
                        <option value="0">선택하세요</option>
                        <option value="1">10대 이하</option>
                        <option value="2">20-30대</option>
                        <option value="3">40-50대</option>
                        <option value="4">50대이상</option>
                    </FormikTextInput>
                    </div>

                    <FormikTextInput required={true} component="select" name="region" label="지역" defaultValue={"0"}>
                        <option value="0">선택하세요</option>
                        <option value="1">서울특별시</option>
                    </FormikTextInput>

                    <FormikTagSelect
                        required={true}
                        name="topics"
                        label="포스팅 카테고리 (최대 3개 선택)"
                        // list={[
                        //     '게임', '남성패션', '다이어트', '레저', '맛집/카페', '문화생활', '반려동물', '뷰티',
                        //     '생활/주방', '숙박'
                        // ]}
                        list={favoriteKeywords}
                    />

                    <FormikInlineRadioInput
                        type="radio"
                        name="receiveEmail"
                        label={t('RegisterForm.receiveEmail')}
                        selection={[{
                            value: 'yes',
                            label: '수신',
                        }, {
                            value: 'no',
                            label: '수신안함',
                        }]}
                    />

                    <FormikInlineRadioInput
                        type="radio"
                        name="pushNotice"
                        label={t('RegisterForm.pushNotice')}
                        selection={[{
                            value: 'yes',
                            label: '허용',
                        }, {
                            value: 'no',
                            label: '허용안함',
                        }]}
                    />
                    {/*<FormikCheckField name='pushCampaign' label={t('RegisterForm.pushCampaign')} />*/}
                    <FormikInlineRadioInput
                        type="checkbox"
                        name="pushCampaign"
                        label={t('RegisterForm.pushCampaign')}
                        selection={[{
                            value: 'yes',
                            label: '허용',
                        }, {
                            value: 'no',
                            label: '허용안함',
                        }]}
                    />

                    <SectionDivider />

                    <p className="register-from">
                        <Trans i18nKey='RegisterForm.agreement'>
                            회원으로 가입하시면 <a href={externalLinks.policy}>이용 약관</a>과 <a href={externalLinks.privacy}>개인정보
                            정책</a>을 읽고
                            동의한 것으로 간주됩니다.
                        </Trans>
                    </p>

                    {/*<FormikSubmitButton fullWidth>{t('RegisterForm.submit')}</FormikSubmitButton>*/}
                    <div className="d-grid gap-2">
                        <FormikSubmitButton buttonProps="btn-dark">{t('RegisterForm.submit')}</FormikSubmitButton>
                    </div>
                </Form>
            )}
        </Formik>

        {/*<SectionDivider />*/}

        {/*<div className='text-center'>*/}
        {/*  <button className='btn btn-light btn-block' type='button' onClick={handleGoogleLogIn}>*/}
        {/*    <IconLabel brand icon='google' label={t('LoginForm.google')} />*/}
        {/*  </button>*/}

        {/*  /!*<button className='btn btn-light btn-block' type='button' onClick={handleKakaoLogIn}>*!/*/}
        {/*  /!*  {t('LoginForm.kakao')}*!/*/}
        {/*  /!*</button>*!/*/}
        {/*</div>*/}

        {/*<SectionDivider />*/}

        {/*<div className='text-center'>*/}
        {/*  <a className='btn btn-link' href={externalLinks.privacy}>{t('RegisterForm.privacy')}</a>*/}
        {/*  <span className='text-secondary'>/</span>*/}
        {/*  <a className='btn btn-link' href={externalLinks.policy}>{t('RegisterForm.policy')}</a>*/}
        {/*</div>*/}
    </>;
}

export default RegisterBloggerForm;
