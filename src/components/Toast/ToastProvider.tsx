
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/24
 */

import React, {createContext, useContext} from "react";
import {ToastItem} from "@components/Toast/ToastItem";



export const ToastProvider = {
    alert: (title: string, message: string | any[], size?: string) => {
        // ToastProvider.stack.push(<ToastItem title={title} msg={message}/>)
        // ToastProvider.setCurrent({
        //     title: title,
        //     message,
        //     close: '닫기',
        // })
        // OpenModal()
    },
    confirm: (title: string, message: string | any[], size?: string) => {
        // ToastProvider.setCurrent({
        //     title: title,
        //     message,
        //     close: '취소',
        //     ok: '확인',
        // })
        // OpenModal()
    },
    error: (message: string, code?, size?: number) => {
        // ToastProvider.setCurrent({
        //     title: 'Error',
        //     message,
        //     close: '닫기',
        // })
        // OpenModal()
    },
    info: (message: string) => {
        ToastProvider.add({
            title: '안내',
            msg: message,
        })
    },
    add: null,
}


export const ToastContext = createContext<any>(ToastProvider);

export const useToast = () => useContext(ToastContext);
