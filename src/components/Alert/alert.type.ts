import {UserIdentity} from "@core/types";

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/24
 */



export type AlertProviderType = {
    // success: (params: any) => Promise<any>;
    // alert: (title: string, message: string | any[], size?: string) => Promise<any>;
    // confirm: (title: string, message: string | any[], size?: string) => Promise<any>;
    // error: (message: string, code?, size?: number) => Promise<any>;

    success: (params: any, onClose?) => void
    alert: (title: string, message: string | any[], size?: string, onClose?)  => void
    confirm: (title: string, message: string | any[], size?: string, onClose?)  => void
    error: (message: string, code?, size?: number, onClose?)  => void

    // stack: any[],
    setCurrent: any,
    [key: string]: any;
};
