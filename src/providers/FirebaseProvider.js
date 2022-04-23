/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/12
 */

import {useEffect} from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/remote-config';
// import {setNewTokenToStorage} from "./StorageProvider";
// import {setNewTokenToStorage} from "./AuthProvider";

// const firebaseConfig = require(process.env.REACT_APP_ENV === 'development' ? './firebaseConfig.dev.json' : './firebaseConfig.prod.json');
//
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.auth().useDeviceLanguage();
//
// // Remote Config 설정
// const remoteConfig = firebase.remoteConfig();

// const AuthContext = createContext()

export const FirebaseProvider = props => {
    // useEffect(() => {
    //     const firebaseConfig = require(process.env.REACT_APP_ENV === 'development' ? './firebaseConfig.dev.json' : './firebaseConfig.prod.json');
    //
    //     firebase.initializeApp(firebaseConfig);
    //     firebase.analytics();
    //     firebase.auth().useDeviceLanguage();
    //
    //     // Remote Config 설정
    //     const remoteConfig = firebase.remoteConfig();
    //
    //
    // }, [])

    // useEffect(() => {
    //     const handle = setInterval(async () => {
    //         const user = firebase.auth().currentUser;
    //         if (user) {
    //             // await user.getIdToken(true);
    //             const token = await user.getIdToken(true);
    //             setNewTokenToStorage(token)
    //         }
    //
    //     }, 10 * 60 * 1000);
    //
    //     // clean up setInterval
    //     return () => clearInterval(handle);
    // }, []);

    return <></>
}

// export const AuthService = props => {
//     const {authProvider} = props
// }


export async function sendPasswordResetEmail(email) {
    try {
        await firebase.auth().sendPasswordResetEmail(email);
    } catch (e) {
        // this.throwFirebaseError(e, 'sendPasswordResetEmail');
        return Promise.reject(e)
    }
}
