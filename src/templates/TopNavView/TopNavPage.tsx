import React, {createContext, useContext, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
// import {observer, MobXProviderContext} from 'mobx-react';
import {useAuthState, useGetIdentity, useLogin, useLogout} from "@core/auth";
import {useAlert} from "@components/Alert";
import TopNavView from "@templates/TopNavView/TopNavView";
import LoggedInMenu from "@templates/TopNavView/LoggedInMenu";
import NotLoggedInMenu from "@templates/TopNavView/NotLoggedInMenu";
import {LoginModal, PasswordResetModal} from "@templates/LoginModal";

/**
 * 상단 메뉴가 달린 페이지 컨테이너
 */

const TopNavPage = (props: any) => {
    const [showLogin, setShowLogin] = useState(false);
    const {loading: authLoading, authenticated} = useAuthState();
    const {identity, loading: identityLoading} = useGetIdentity()
    const [showPwdRest, setShowPwdRest] = useState(false)
    const login = useLogin()
    const logout = useLogout()
    const [searchValue, setSearchValue] = useState("")
    const alert = useAlert()
    const {location, children, history} = props;

    /**
     * 검색 입력 내용을 변경시키고 검색 결과를 요청함
     *
     * @param {string} value
     */
    const handleSearchChange = (value: string) => {
        setSearchValue(value)
    }

    /**
     * 검색 입력 내용을 반영하고 검색 페이지로 이동함
     *
     * @param {string} value
     */
    const handleSearchConfirm = (value: string) => {
        if (value) {
            history.push(`/search?keyword=${value}`);
        }
    }

    /**
     * 로그인 모달을 연다
     */
    const openLoginModal = () => {
        setShowLogin(true)
    }

    /**
     * 로그인 모달을 닫는다
     */
    const closeLogInModal = () => {
        setShowLogin(false)
    }


    async function handleLoginSubmit(credentials: any) {
        const {username, password, keepLogin} = credentials
        try {
            await login({email: username, password}, '/')
            setShowLogin(false)
        } catch (e) {
            setShowLogin(false)
            alert.error(e.message);
        }
    }

    /**
     * 로그아웃 이벤트 핸들러
     */
    const handleLogOut = async () => {
        await logout()
    }



    function handleClosePwdRest() {
        setShowPwdRest(false)
    }

    function handleShowPwdReset() {
        closeLogInModal()
        setShowPwdRest(true)
    }

    const rootPath = location.pathname.split('/')[1];


    return <TopNavView
        rootPath={rootPath}
        // searchItems={searchStore.keywordItems.slice()}
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onSearchConfirm={handleSearchConfirm}
        right={
            authLoading ? <span className='fas fa-circle-notch fa-spin text-muted'/> :
                (
                    identity ?
                        <LoggedInMenu
                            // user={sessionStore.user}
                            user={identity}
                            notifications={[]}
                            onLogOut={handleLogOut}
                            // onShopPopupOpen={handleShopPopupOpen}
                        /> :
                        <NotLoggedInMenu onLoginOpen={openLoginModal}/>
                )
        }
    >
        {children}

        <LoginModal show={showLogin}
                    onHide={closeLogInModal}
                    handleLogin={handleLoginSubmit}
                    handleCloseLogInModal={closeLogInModal}
                    handleShowPwdReset={handleShowPwdReset}
        />
        <PasswordResetModal isOpen={showPwdRest} onClose={handleClosePwdRest}/>
    </TopNavView>;

}

export default withRouter(TopNavPage);
