import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Form, Formik} from "formik";
import {object, string} from "yup";
import {FormikCheckInput, FormikTextInput} from "@components/FormikInput";
import {Link, useHistory} from "react-router-dom";
import {FormikSubmitButton} from "@components/FormikButton";
import {Button, Modal} from "react-bootstrap";

import './LoginModal.scss'
import {Spacer2} from "@components/Layout";

export const LoginModal = (props) => {
    const {show, onHide, handleLogin, handleShowPwdReset} = props
    const {t} = useTranslation();
    const history = useHistory()

    async function handleSubmit(values, actions) {
        if (handleLogin) {
            try {
                actions.setSubmitting(true);
                await handleLogin(values);
                actions.setSubmitting(false);
            } catch (e) {
                actions.setSubmitting(false);
            }
        }
    }

    function handleRegisterUser() {
        onHide()
        history.push('/register');
    }


    return <>
        <Modal centered
               show={show}
               onHide={onHide}
               dialogClassName="modal-login"
        >
            {/*<Modal.Header closeButton >*/}
            {/*    <Modal.Title >로그인</Modal.Title>*/}
            {/*<Spacer2 py={40}/>*/}
            <div className={'header'}>
                <div className={'typo-18 w-100 text-center fw-bold'}>로그인</div>
            </div>
            {/*</Modal.Header>*/}
            <div className="body">
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        keepLogin: true
                    }}
                    validationSchema={object().shape({
                        username: string().email(t('validation.email')).required(t('validation.required')),
                        password: string().required(t('validation.required'))
                    })}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        {/*<FormikField name='username' label={t('LoginForm.username')}/>*/}
                        <FormikTextInput name='username' label={null} placeholder="이메일을 입력해 주세요"
                                         size={14}
                                         data-test='user'/>
                        <FormikTextInput type='password' name='password' label={null}
                                         size={14}
                                         placeholder="비밀번호를 입력해 주세요"
                                         data-test='password'/>
                        <div className="d-grid gap-2 login-form--button">
                            <FormikSubmitButton id="login"
                                                className={'btn btn-bl-primary login-button typo-18'}
                                                // buttonProps="btn-dark"
                            >
                                <div className="typo-16">{t('LoginForm.submit')}</div>
                            </FormikSubmitButton>
                        </div>
                        <Spacer2 pt={10}/>

                        <div className="container ">
                            <div className={"row"}>
                                <div className={"col text-start"}>
                                    <div className="typo-12 ">
                                        <FormikCheckInput name='keepLogin'
                                                          className={'m-0 p-0'}
                                                          label={t('LoginForm.keep')}/>
                                    </div>
                                </div>
                                <div className={"col "}>
                                    <div className="typo-12 text-end">
                                        <Link className='btn-link p-0' onClick={handleShowPwdReset} to="#">
                                            <div className="typo-12">{t('LoginForm.help')}</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*</div>*/}
                        </div>

                        {/*<PasswordResetModal isOpen={showPwdRest} onClose={handleClosePwdRest}/>*/}


                    </Form>
                </Formik>
                <Spacer2 pt={40}/>

                <div className="container low typo-16">
                    <div className={"row"}>
                        <div className={"col text-truncate text-end"}>
                            <div>회원이 아니신가요?</div>
                        </div>
                        <div className={"col text-truncate text-start"}>
                            <Link className='' to="#" onClick={handleRegisterUser}>
                                <div className="typo-16 text-right color-black-1 fw-bold">회원가입 하기</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <Spacer2 pt={20}/>

            </div>
        </Modal>

    </>;
}
