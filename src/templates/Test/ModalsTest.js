/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/26
 */

import React, {useState} from "react";
import {useAlert} from "@components/Alert";
import {Button, Modal} from "react-bootstrap";




export const AlertTest = props => {
    const [show, setShow] = useState(false)
    const alert = useAlert()
    function onClick() {
        alert.notify('안내', '이메일 인증이 완료되었습니다', '', () => {
            console.log('close')
        })
        // alert.error('이메일 인증 오류', '', '', () => {
        //     console.log('close')
        // })
    }

    return (<>
        <button type="button" className="btn btn-primary" onClick={onClick}>
            Launch demo alert
        </button>
    </>)
}


export const ModalTest = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} dialogClassName={'modal-w90'}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
