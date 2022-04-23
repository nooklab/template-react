
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/10/31
 */


import React, {useState} from "react";
import {Toast, ToastContainer} from "react-bootstrap";
import dayJs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import {ToastContext, ToastProvider} from './ToastProvider'
dayJs.extend(relativeTime)



export const ToastItem = props => {
    const {title, msg} = props
    const [time] = useState(dayJs());
    const [show, setShow] = useState(true);
    const fromNow = dayJs(time).fromNow()
    return <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide>
        <Toast.Header closeButton={true} >
            <img
                src="holder.js/20x20?text=%20"
                // src="..."
                className="rounded me-2"
                alt=""
            />
            <strong className="me-auto">{title}</strong>
            <small>{fromNow}</small>
        </Toast.Header>
        <Toast.Body>{msg}</Toast.Body>
    </Toast>
}




export const ToastContainerEx = props => {
    const [toastList, setToastList] = useState([])

    function addToast({title, msg}) {
        toastList.push(<ToastItem title={title} msg={msg}/>)
        setToastList([...toastList])
    }
    ToastProvider.add = addToast

    return (
        <>
            {/*<Button onClick={addToast}>Toast</Button>*/}
            <ToastContext.Provider >
            <ToastContainer className="p-3" position={"bottom-end"}>
                {toastList.map((t, index) => (
                    <div key={index}>{t}</div>
                ))}
            </ToastContainer>
            </ToastContext.Provider>
        </>
    );
}
