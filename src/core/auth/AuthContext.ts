/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/13
 */



import { createContext } from 'react';

import { AuthProvider, UserIdentity } from '../types';

const defaultIdentity: UserIdentity = { id: '' };

const defaultProvider: AuthProvider = {
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    checkAuth: () => Promise.resolve(),
    checkError: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
    // getIdentity: () => Promise.resolve(defaultIdentity),
    getIdentity: () => Promise.resolve(),
};

const AuthContext = createContext<AuthProvider>(defaultProvider);

AuthContext.displayName = 'AuthContext';

export default AuthContext;
