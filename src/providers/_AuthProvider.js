/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/13
 */

import firebase from 'firebase/app';
import 'firebase/auth';
import {AuthStorageName, getAuthIdentity, setAuthFromIdTokenResult} from "./StorageProvider"


export const _AuthProvider = {
    // called when the user attempts to log in

    login: async ({email, password}) => {
        try {
            let persistence = firebase.auth.Auth.Persistence.SESSION
            // if (keepLogin) {
            //     persistence = firebase.auth.Auth.Persistence.LOCAL
            // }
            await firebase.auth().setPersistence(persistence)
            const res = await firebase.auth().signInWithEmailAndPassword(email, password)
            // return checkAdminUser()
            const idTokenResult = await res.user.getIdTokenResult()
            // const identity = toIdentity(idTokenResult)
            console.log('login ok (email)')
            await setAuthFromIdTokenResult(idTokenResult)
            // localStorage.setItem(AuthStorageName, JSON.stringify(identity));
            // if (idTokenResult.claims.type === 'admin') {
            //     return true
            // }
            // const identity = {
            //     id: idTokenResult.claims.sub
            // }
            // console.log('login ok (email)')
            // localStorage.setItem(authStorageName, JSON.stringify(identity));
            // AuthProvider.updated ++
            return Promise.resolve();
        } catch (e) {
            // this.throwFirebaseError(e, 'logIn');
            console.error('login fail (email)')
            return Promise.reject();
        }
    },
    // called when the user clicks on the logout button
    logout: async () => {
        localStorage.removeItem(AuthStorageName);
        // return Promise.resolve();
        await firebase.auth().signOut();
        // AuthProvider.updated ++
        console.log('logout')
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({status}) => {
        if (status === 401 || status === 403) {
            // localStorage.removeItem(AuthStorageName);
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: async () => {
        // const item = localStorage.getItem(AuthStorageName)
        const identity = getAuthIdentity()
        console.log('check-auth')
        return identity ? Promise.resolve() : Promise.reject();
        // return checkAdminUser()
        // return Promise.resolve()
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
    getIdentity: () => {
        try {
            const identity = getAuthIdentity()
            return Promise.resolve(identity)
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
