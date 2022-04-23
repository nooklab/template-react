/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/11/23
 */



import {Button, Modal} from "react-bootstrap";
import React from "react";

export enum MODAL_RESULT {
    cancel,
    ok
}


export const CommonModal = props => {
    const {title, state, body, cancel, ok, onClose} = props
    const [show, setShow] = state

    const handleClose = () => {
        setShow(false);
        onClose(MODAL_RESULT.cancel)
    }
    // const handleShow = () => setShow(true);
    function handleCancel() {
        setShow(false);
        onClose(MODAL_RESULT.cancel)
    }
    function handleOk() {
        setShow(false);
        onClose(MODAL_RESULT.ok)
    }

    return <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
            {cancel &&
            <Button variant="secondary" onClick={handleCancel}>
                {cancel}
            </Button>}
            {ok && <Button variant="primary" onClick={handleOk}>
                {ok}
            </Button>}
        </Modal.Footer>
    </Modal>
}
