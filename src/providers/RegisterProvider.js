
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/14
 */


import firebase from "firebase";
import logger from "../utils/logger";
import {postQuery} from "./DataProvider";


export const RegisterProvider = {
    register: async ({ username, password }) => {
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(username, password);

            // const user = this.firebaseUser;
            const user = result.user
            // @ts-ignore
            const token = await user.getIdToken();

            logger.info('AuthService.register: User registered', { token, firebaseUser: user });

            await user.sendEmailVerification()

            // return token;
            return Promise.resolve(token);
        } catch (e) {
            // this.throwFirebaseError(e, 'register');
            return Promise.reject(e);
        }
    },
    autoLogin: async () => {
        const user = firebase.auth().currentUser
        const idTokenResult = await user.getIdTokenResult(true)
        // await setAuthFromIdTokenResult(idTokenResult)

    }
}


export async function register(credentials) {
    // this.isLoadingRegister = true;
    try {
        // this.authService.setRegistering(true)
        const {username, password, detail, type} = credentials
        // firebase 등록
        await RegisterProvider.register({
            username,
            password
        });
        // own-server 등록
        await postQuery(`user/register`, {
            userType: type,
            detail,
        })


        await RegisterProvider.autoLogin();
        // await this.authService.refreshToken();
        // await this.loadProfile();
        // this.authService.setRegistering(false)
        // this.isLoadingRegister = false;
        return {}
    } catch (err) {
        // this.isLoadingRegister = false;
        throw err
        return {
            err
        }
    }
}
