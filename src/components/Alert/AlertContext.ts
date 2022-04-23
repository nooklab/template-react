/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/24
 */




import { createContext } from 'react';

// import { AuthProvider, UserIdentity } from '../types';

// const defaultIdentity: UserIdentity = { id: '' };

const defaultProvider: any = {
    alert: async (title: string, message: string | any[], size: string) => Promise.resolve(),
    confirm: async (title: string, message: string | any[], size: string) => Promise.resolve(),
    error: async (message: string, code = null, size = 0) => Promise.resolve(),
    // alert: (title: string, message: string | any[], size: string) => Promise<any>;
    // confirm: (title: string, message: string | any[], size: string) => Promise<any>;
    // error: (message: string, code, size) => Promise<any>;
    stack: [],
};

export const AlertContext = createContext<any>(defaultProvider);

AlertContext.displayName = 'AlertContext';

