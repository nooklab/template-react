import React from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import {useTranslation, withTranslation} from 'react-i18next';
import View from '../../components/View';
import Footer from '../../templates/Footer';
import {RegisterAdvertiserForm} from '../../templates/RegisterForm';
// import {SideImageForm} from "@templates/SideImageForm/SideImageForm";
import {useGetIdentity} from "@core/auth";
import {useLocation} from "react-router";
import {useAlert} from "@components/Alert";
import {register} from "../../providers";
import {UserRegisterInfo} from "../../interfaces";
// import SlimSectionDivider from "@components/SectionDivider/SlimSectionDivider";
import './Register.scss'
import {Spacer2} from "@components/Layout";
import {SectionDivider2} from "@components/SectionDivider";

/**
 * 회원가입 페이지
 */
const RegisterUser = props => {
    // const {userStore, alertStore} = useContext(MobXProviderContext);
    const {identity} = useGetIdentity()
    const location = useLocation()
    const history = useHistory()
    const alert = useAlert()
    const {t} = useTranslation()

    /**
     * 회원가입 폼 전송 이벤트
     */
    const handleRegisterSubmit = async (credentials: UserRegisterInfo) => {
        try {
            await register(credentials);
            history.push('/verify');
        } catch (e) {
            alert.error(t(`error.firebase.${e.code}`));
            throw e;
        }
    }

    /**
     * 아이디 유일성 체크 이벤트
     *
     * @param {string} name
     * @returns {boolean}
     */
    const handleCheckId = async (name: string) => {
        return true
    }

    /**
     * 소셜 로그인 이벤트
     *
     * @param {string} providerName 소셜 서비스 코드
     */
    const handleSocialLogIn = async (providerName: string) => {
        // const {sessionStore, alertStore} = this.props;
        //
        // try {
        //     switch (providerName) {
        //         case 'google':
        //             await sessionStore.logInWithGoogle();
        //             break;
        //         case 'kakao':
        //             await sessionStore.logInWithKakao();
        //             break;
        //         default:
        //             break;
        //     }
        // } catch (e) {
        //     alert.error(e.message);
        // }
    }

    // const {sessionStore, location, t} = this.props;

    // if (sessionStore.isAuthenticated) {
    if (identity) {
        const {from}: any = location.state || {from: {pathname: '/'}};

        return <Redirect to={from}/>;
    }

    return <View scrollable vertical fill>
        {/*<SideImageForm title="회원 가입"*/}
        {/*               img="/img/Group 139.png">*/}
        <div className='container d-flex justify-content-center'>
            <div className="register-view">
                {/*<div className="side_image__font_big">*/}
                <Spacer2 pt={60}/>
                <div className="typo-26 d-flex justify-content-center">
                    회원 가입
                </div>
                <Spacer2 pt={40}/>
                <SectionDivider2 h={1.5} r={100} color={'#1B1D1F'}/>
                {/*<SlimSectionDivider className={'dark'}/>*/}
                {/*<div className="l-line"/>*/}
                <div className="register-container">
                <RegisterAdvertiserForm
                    onSubmit={handleRegisterSubmit}
                    onCheckId={handleCheckId}
                    onSocialLogIn={handleSocialLogIn}
                />
                </div>
            </div>
        </div>
        {/*</SideImageForm>*/}
        <Spacer2 pt={120}/>

        <Footer/>
    </View>;
}

export default withTranslation()(RegisterUser);
