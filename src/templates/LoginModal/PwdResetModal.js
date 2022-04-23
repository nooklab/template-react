import {useTranslation} from "react-i18next";
import {useAlert} from "@components/Alert";
import firebase from "firebase";
import {Field, Form, Formik} from "formik";
import {object, string} from "yup";
import {Form as BSForm, Modal} from "react-bootstrap";
import {ModalCancelButton, ModalSubmitButton} from "@components/Modal";
import React from "react";

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/06
 */


export const PasswordResetModal = props => {
    const {isOpen, onClose} = props
    const {t} = useTranslation();
    const alert = useAlert()

    function onSubmit(formik) {
        formik.setSubmitting(true)
        console.log('submit', formik.values)
        const {email} = formik.values

        firebase.auth().sendPasswordResetEmail(email).then(() => {
            formik.setSubmitting(false)
            onClose()
            alert.confirm('안내', `비밀번호 리셋 메일 해당 주소(${email})로 보냈습니다`)
        }).catch(err => {
            formik.setSubmitting(false)
            onClose()
        })
    }

    return (
        <Formik
            initialValues={{
                email: ''
            }}
            validationSchema={object().shape({
                email: string().email(t('validation.email')).required(t('validation.required'))
            })}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form>
                    <Modal show={isOpen} centered onHide={onClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>비밀번호 초기화</Modal.Title>
                        </Modal.Header>
                        <Modal.Body bsPrefix={'password-reset-container'} className={"m-4"}>
                            <Field name={'email'}
                                   render={({field, formProp}) => (
                                       <BSForm.Group>
                                           <BSForm.Label>가입시 사용한 이메일을 입력해 주세요</BSForm.Label>
                                           <BSForm.Control
                                               name={'email'}
                                               // ref={this.innerRef}
                                               type="text"
                                               value={field.value}
                                               onChange={field.onChange}
                                           />
                                       </BSForm.Group>
                                   )}/>

                        </Modal.Body>
                        <Modal.Footer className={"m-0"}>
                            <ModalCancelButton label={'취소'} onClose={onClose}/>
                            <ModalSubmitButton label={'비밀번호 초기화 메일 보내기'} onSubmit={() => onSubmit(formik)}/>
                        </Modal.Footer>
                    </Modal>
                </Form>
            )}
        </Formik>
    )
}
