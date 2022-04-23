
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/11/12
 */


import {Button} from "react-bootstrap";
import React from "react";
import './ModalDlg.scss'
import {useFormikContext} from "formik";


export const ModalCancelButton = props => {
    const {label, onClose, ...rest} = props
    return <Button className='dlg-cancel-button' onClick={onClose} {...rest}>{label}</Button>
}


export const ModalSubmitButton = props => {
    const {label, onSubmit, ...rest} = props
    const formik = useFormikContext();
    const {isSubmitting} = formik;
    return <Button className='dlg-naver-button' onClick={onSubmit} {...rest}>
        {isSubmitting ? <><span className='fas fa-circle-notch fa-spin' /><span> </span>{label}</> : label }</Button>
}

