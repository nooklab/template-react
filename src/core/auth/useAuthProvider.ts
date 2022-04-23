/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/13
 */


import { useContext } from 'react';

import { AuthProvider } from '../types';
import AuthContext from './AuthContext';

export const defaultAuthParams = {
    loginUrl: '/login',
    afterLoginUrl: '/',
    afterLogoutUrl: '/',
};

/**
 * Get the authProvider stored in the context
 */
export const useAuthProvider = (): AuthProvider => useContext(AuthContext);
