import React, {useContext, useEffect, useState} from 'react';
// import {MobXProviderContext} from 'mobx-react';
// import { action } from 'mobx';
import {withTranslation} from 'react-i18next';
import LoadingBox from '../../components/LoadingBox';
import {Formik, Form} from 'formik';
// import {FormikLabelField} from "@components/FormField2/FormikLabelField";
import {useGetIdentity} from "@core/auth";
import {FormikTextInput} from "@components/FormikInput";
import {useAlert} from "@components/Alert";

/**
 * 프로필 설정 페이지
 */
const ProfileSettings = (props: any) => {
    // const {alertStore} = useContext(MobXProviderContext)
    const [loading, setLoading] = useState(false)
    const {identity, loading: identityLoading} = useGetIdentity()
    const alert = useAlert()
    // componentDidMount() {
    //   const { profileSettingsStore } = this.props;
    //
    //   profileSettingsStore.loadProfileSettings();
    // }

    // useEffect(() => {
        // profileSettingsStore.loadProfileSettings();
    // }, [])

    /**
     * 프로필 이미지 변경 이벤트
     *
     * @param {Event} e
     */
        // @action.bound
    const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            // const { profileSettingsStore } = props;
            const file = e.target.value;

            // profileSettingsStore.updateProfileImage(file);
        }


    /**
     * 프로필 설정 변경 이벤트
     *
     * @param {ProfileSettings} values
     */
        // @action.bound
    const handleProfileBioSubmit = async (values: any) => {
            // const { profileSettingsStore, alertStore } = props;

            // await profileSettingsStore.updateBio(values);

            alert.alert("안내", 'ProfileSettings.updated');
        }

    /**
     * 닉네임 유일성 체크 이벤트
     *
     * @param {string} nickname
     * @returns {boolean}
     */
    const handleCheckNickname = async (nickname: string) => {
        // const { profileSettingsStore } = props;

        // return await profileSettingsStore.checkUniqueNickname(nickname);
    }

    // render() {
    //   const { t, profileSettingsStore } = props;
    const {t} = props;
    // const profileSettings = profileSettingsStore.profileSettings;
    // const {user, firebaseUser} = sessionStore

    // if (!profileSettings || profileSettingsStore.isLoadingProfileSettings) {
    //   return <LoadingBox />;
    // }
    // if (!user || loading) {
    if (identityLoading) {
        return <LoadingBox/>;
    }

    function onSubmit() {
    }


    return <>
        {/*<div className="campaign__page-title">캠페인 생성</div>*/}
        <Formik
            onSubmit={onSubmit}
            initialValues={{
                // account: firebaseUser.email
                account: identity.email
            }}
            validationSchema={{}}
        >
            {(formikProps) => (
                <Form>
                    {/*<SettingFieldGroup>*/}

                    <FormikTextInput disabled={true} name='account' label={t('계정')}/>

                        {/*<SettingField label={t('ProfileSettings.profileImage')} help={t('ProfileSettings.profileImageHelp')}>*/}
                        {/*    <ImageInputOld*/}
                        {/*        value={user.photoURL}*/}
                        {/*        onChange={handleProfileImageChange}*/}
                        {/*        imagePlaceholder={avatarImagePlaceholder}*/}
                        {/*        rounded*/}
                        {/*    />*/}


                        {/*<SettingField label={t('ProfileSettings.profileBanner')} help={t('ProfileSettings.profileBannerHelp')}>*/}
                        {/*    <ImageInput value={profileSettings.profileBannerUrl} onChange={handleProfileBannerChange}/>*/}
                        {/*</SettingField>*/}

                        {/*<SettingField>*/}
                        {/*    <ProfileBioForm*/}
                        {/*        initialValues={profileSettings}*/}
                        {/*        onSubmit={handleProfileBioSubmit}*/}
                        {/*        onCheckNickname={handleCheckNickname}*/}
                        {/*    />*/}
                        {/*</SettingField>*/}
                    {/*</SettingFieldGroup>*/}
                </Form>
            )}
        </Formik>
    </>;
    // }
}

export default withTranslation()(ProfileSettings);
