/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/10/29
 */


// import {Typography} from "@templates/Home/components";
import React from "react";
import './EmailVerify.scss'
// import {Spacer2} from "@templates/Campaign/Common";
import {useGetIdentity} from "@core/auth";
import firebase from "firebase";
import {useHistory} from "react-router";
import LoadingBox from "@components/LoadingBox";
import {useAlert} from "@components/Alert";
import {Spacer2} from "@components/Layout";
import {Typography} from "@components/Typography/Typography";


export const EmailVerify = props => {
    const {identity, loading: identityLoading} = useGetIdentity()
    const alert = useAlert()
    const history = useHistory()
    // const toast = useToast()


    if (identityLoading) {
        return <LoadingBox/>
    }

    if (!identity) {
        // 현재 로그인 이메일 주소 없음
        history.push('/');
        return <LoadingBox/>
    }

    if (identity.emailVerified) {
        // 인증 완료됨
        history.push('/');
        return <>Loading...</>
    }


    function resend() {
        firebase.auth().currentUser.sendEmailVerification().then(() => {
            alert.alert("안내", "메일을 전송했습니다")
        })
    }

    async function loginAgain() {
        // history.push('/logout');
        // history.push('/login');
        const user = firebase.auth().currentUser
        await user.reload()
        // console.log('user',user)
        if (user.emailVerified) {
            await alert.notify("안내", "인증이 완료되었습니다", '', () => {
                // console.log('closed')
                history.push('/');
            })
            // history.push('/');
            // toast.add({
            //     title: "안내",
            //     msg: "인증이 완료되었습니다"
            // })
        }
        else {
            alert.error("안내", "인증이 완료되지 않았습니다. 메일을 재 확인 하세요")
        }
    }

    return <>
        <div className={' d-flex justify-content-center'}>
            <div className={'email-verify-container d-flex flex-column align-items-center'}>

                {/*<div>*/}
                <Typography color='#19DE66' size={28} center bold label='이메일 인증 후 서비스 이용이 가능합니다'/>
                <Spacer2 pt={20}/>
                <Typography size={18} center label='이메일 인증을 위한 메일이 발송되었습니다.'/>
                <Typography size={18} center label='회원 가입 완료를 위해 이메일 인증을 진행해 주세요.'/>
                {/*<Typography size={18} center label={'(인증 완료 후 재 로그인이 필요합니다)'}/>*/}
                <Spacer2 pt={20}/>
                <Typography size={18} center bold label={`가입 이메일 주소 : ${identity.email}`}/>

                <Spacer2 pt={60}/>
                <div className={'d-flex flex-row w-100 justify-content-around'}>
                        <button className="btn login text-center py-2 mx-2 w-50 text-decoration-none" onClick={loginAgain}>
                            인증완료
                        </button>
                        <button className="btn resend text-center py-2 w-50 mx-2 text-decoration-none" onClick={resend}>
                            인증 이메일 다시 보내기
                        </button>
                </div>
                <Spacer2 pt={40}/>
            </div>
        </div>
        {/*<MessageModal/>*/}
    </>
}
