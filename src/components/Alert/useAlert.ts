/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/24
 */



import { useContext } from 'react';

import {AlertContext} from './AlertContext';
import {AlertProviderType} from "./alert.type";

export const defaultAuthParams = {
    alert: (title: string, message: string | any[], size?: string) => {
    },
    confirm: (title: string, message: string | any[], size?: string) => {

    },
    error: (message: string, code?, size?: number) => {
        defaultAuthParams.stack.push({
            message
        })
    },
    stack: []
};

/**
 * Get the authProvider stored in the context
 */
export const useAlert = (): AlertProviderType => useContext(AlertContext);
