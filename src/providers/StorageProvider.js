/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/14
 */



export const AuthStorageName = 'auth'


export function toIdentity(idTokenResult, user) {
    const {token, expirationTime, claims} = idTokenResult
    const {type, email, name, picture, sub} = claims
    const identity = {
        id: sub,
        type,
        name,
        token,
        expirationTime,
        email,
        picture,
        profile: {
            urlKey: ''
        },
        emailVerified: user.emailVerified,
    }
    return identity
}


// export function setAuthFromIdTokenResult(idTokenResult) {
//     const identity = toIdentity(idTokenResult)
//     console.log('login ok (email)')
//     localStorage.setItem(AuthStorageName, JSON.stringify(identity));
// }
//
//
// export function setNewTokenToStorage(token) {
//     let identity = localStorage.getItem(AuthStorageName)
//     if (identity) {
//         identity = JSON.parse(identity)
//         identity.token = token
//         identity = JSON.stringify(identity)
//         localStorage.setItem(AuthStorageName, identity)
//     }
// }
//
// export function getAuthIdentity() {
//     let identity = localStorage.getItem(AuthStorageName)
//     if (identity) {
//         identity = JSON.parse(identity)
//         return identity
//     }
//     return null
// }
