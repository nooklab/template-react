/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/24
 */



// export interface Credentials {
//     username: string,
//     password: string,
//     type: 'user' | 'blogger' | 'influencer'
//     // receiveEmail: string,
//     // pushNotice: boolean,
//     // pushCampaign: boolean
//     // naverId?: string,
// }

export interface UserRegisterInfo {
    username: string,
    password: string,
    type: 'user' | 'blogger' | 'advertiser'
    detail: any
}
