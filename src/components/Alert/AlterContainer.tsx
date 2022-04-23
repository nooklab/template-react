/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/24
 */

import {AlertProvider} from "@components/Alert/AlertProvider";
import React, {useState} from "react";
import {AlertContext} from './AlertContext'
import './AlterContainer.scss'
import {Button, Modal} from "react-bootstrap";


export const AlertContainer = props => {
    const {children} = props
    const [current, setCurrent] = useState({
        title: '',
        message: '',
        close: 'Close',
        ok: 'OK',
        onClose: null,
        icon: null,
    })

    const [show, setShow] = useState(false);


    AlertProvider.setCurrent = setCurrent
    AlertProvider.setShow = setShow

    const {title, message, close, ok, icon, onClose} = current
    function handleClose() {
        setShow(false);
        if (onClose) {
            onClose()
        }
    }

    return (
        <>
            <AlertContext.Provider value={AlertProvider}>
                {children}
                <Modal show={show} onHide={handleClose} centered dialogClassName={'alert-container'}>
                    <div className={'header d-flex justify-content-end align-items-center'} >
                        <span className={'flex-fill text-center title'}>
                            {title}
                        </span>
                        <i className="bi bi-x icon close" onClick={handleClose} />
                    </div>
                    <Modal.Body className={"body d-flex align-items-center justify-content-center"}>
                            <i className={"bi icon " + icon} />
                            <span className='text'>{message}</span>
                    </Modal.Body>
                </Modal>
            </AlertContext.Provider>
        </>
    )
}
