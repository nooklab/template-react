/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/13
 */

import useGetIdentity from './useGetIdentity'
import useLogout from './useLogout'
import useLogin from './useLogin'
import AuthContext from './AuthContext'

export * from './useAuthProvider'
export * from './useAuthState'

export {
    useGetIdentity,
    useLogout,
    useLogin,
    AuthContext,
}
