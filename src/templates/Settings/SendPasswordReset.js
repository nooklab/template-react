import React from 'react';
// import {MobXProviderContext} from 'mobx-react';
import View from '../../components/View';
import Footer from '../../templates/Footer';
import SendPasswordResetForm from '../../templates/SendPasswordResetForm';
import {sendPasswordResetEmail} from "../../providers";

/**
 * 비밀번호 재설정 이메일 전송 페이지
 */
const SendPasswordReset = props => {
    // const {alertStore} = useContext(MobXProviderContext)
    const {history} = props;

    async function handleSubmit({email}) {
        try {
            // await sessionStore.sendPasswordResetEmail(email);
            await sendPasswordResetEmail(email);
            await alert.alert(null, 'SendPasswordResetForm.emailSent');
            // 로그인 페이지로 이동
            history.push('/login');
        } catch (e) {
            alert.error(e.message);
            throw e;
        }
    }

    return <View vertical fill scrollable>
        {/*<CentralView>*/}
            <SendPasswordResetForm
                onSubmit={handleSubmit}
            />
        {/*</CentralView>*/}
        <Footer/>
    </View>;
}

export default SendPasswordReset;
