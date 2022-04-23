/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/01
 */
import firebase from 'firebase/app';
import 'firebase/auth';
import {toIdentity} from "./StorageProvider";

export function retrieveStatusTxt(status) {
    // Make sure any successful status is OK.
    if (status >= 200 && status < 300) {
        return 'ok';
    }
    switch (status) {
        case 401: // 'unauthenticated'
        case 403: // 'permission-denied'
            return 'unauthenticated';

        case 0: // 'internal'
        case 400: // 'invalid-argument'
        case 404: // 'not-found'
        case 409: // 'aborted'
        case 429: // 'resource-exhausted'
        case 499: // 'cancelled'
        case 500: // 'internal'
        case 501: // 'unimplemented'
        case 503: // 'unavailable'
        case 504: // 'deadline-exceeded'
        default:
            // ignore
            return 'ok';
    }
}

export async function getAuthIdentity() {
    // let identity = localStorage.getItem(AuthStorageName)
    // if (identity) {
    //     identity = JSON.parse(identity)
    //     return identity
    // }
    const identity = await AuthProvider.getIdentity()
    return identity
}

export const AuthProvider = {
    init: async () => {
        try {
            let persistence = firebase.auth.Auth.Persistence.SESSION
            await firebase.auth().setPersistence(persistence)
        }
        catch (err) {
            console.error(err)
        }
    },

    getUserLogin: () => {
        return new Promise((resolve, reject) => {
            if (firebase.auth().currentUser) return resolve(firebase.auth().currentUser);
            const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
                unsubscribe();
                if (user) {
                    resolve(user);
                } else {
                    reject();
                }
            });
        });
    },

    // called when the user attempts to log in
    login: async ({email, password}) => {

        // accept all username/password combinations
        try {
            if (email && password) {
                await AuthProvider.init()
                const user = await firebase.auth().signInWithEmailAndPassword(email, password)
                // const user = await firebase.auth().signInWithEmailAndPassword(email, password)
                // const result = await simpleQuery('user', {}, '/privilege', true)
                // const privileges = result.json.data
                // localStorage.setItem(PrivilegeStorageName, JSON.stringify(privileges));
                console.log('login ok (email)')
                return user
            } else {
                return AuthProvider.getUserLogin()
            }
        } catch (e) {
            console.error('login fail (email)')
            throw new Error('Login error: invalid credentials');
        }

    },
    // called when the user clicks on the logout button
    logout: async () => {
        // localStorage.removeItem(PrivilegeStorageName);
        await firebase.auth().signOut();
        console.error('logout')
    },
    // called when the API returns an error
    checkError: (errorHttp) => {
        const status = !!errorHttp && errorHttp.status;
        const statusTxt = retrieveStatusTxt(status);
        if (statusTxt === 'ok') {
            return Promise.resolve();
        }
        console.warn('Received authentication error from API');
        return Promise.reject();

    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: async () => {
        return AuthProvider.getUserLogin()
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => {
        return Promise.resolve()
    },
    getIdentity: async () => {
        try {
            const user = await AuthProvider.getUserLogin();
            const idToken = await user.getIdTokenResult();
            return toIdentity(idToken, user)
        } catch (error) {
            return error;
        }
    }
}


