import React, {useContext} from 'react';
// import {observer, inject, MobXProviderContext} from 'mobx-react';
import SettingField, { SettingFieldGroup } from '../../components/SettingField';
import {PasswordResetForm} from "@templates/Settings/PasswordResetForm";
import {useGetIdentity, useLogout} from "@core/auth";
import {sendPasswordResetEmail} from "../../providers";
import LoadingBox from "@components/LoadingBox";
// import { PasswordResetForm } from '../../templates/Settings';

/**
 * 비밀번호 변경 페이지
 */
const PasswordResetSettings = props => {
  // const { sessionStore } = useContext(MobXProviderContext)
  const logout = useLogout()
  const {identity} = useGetIdentity()
  if (!identity) {
    return <LoadingBox />
  }
  async function handlePasswordReset() {

    // const email = sessionStore.user.email || sessionStore.firebaseUser.email;

    await sendPasswordResetEmail(identity.email);
    await alert.alert(null, 'PasswordResetSettings.emailSent');

    // 로그인 페이지로 이동
    // await sessionStore.logOut();
    await logout()
  }

    return <>
      <SettingFieldGroup>
        <SettingField>
          <PasswordResetForm onSubmit={handlePasswordReset} />
        </SettingField>
      </SettingFieldGroup>
    </>;
}

export default PasswordResetSettings;
