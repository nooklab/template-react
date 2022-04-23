import React, {useContext, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
// import {inject, MobXProviderContext, observer} from 'mobx-react';
import {useAlert} from "@components/Alert";
// import AlertStore from "../stores/AlertStore";


// type GlobalErrorHandlerProps = {
//   alertStore: AlertStore
// }


/**
 * 전역 에러 핸들러
 */
// @inject('alertStore')
// @observer
// class GlobalErrorHandler extends React.Component<GlobalErrorHandlerProps> {
export const GlobalErrorHandler = () => {
    let redirectToHome = false;
    const alert = useAlert()


    useEffect(() => {
        // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleError);
        return function cleanup() {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleError);
        };
    });


    /**
     * 에러 이벤트 핸들러
     */
    const handleError = (e: any) => {
        // const { alertStore } = this.props;

        if (e.i18nArgs) {
            alert.error(e.i18nArgs);
        } else if (e.error) {
            handleError(e.error);
            return;
        } else if (e.reason) {
            handleError(e.reason);
            return;
        } else if (e.message) {
            alert.error(e.message);
        } else {
            // @ts-ignore
            alert.error('error.unknownError', JSON.stringify(e, null, 2));
        }

        if (e.message === 'error.userNotFound') {
            redirectToHome = true;
        } else {
            redirectToHome = false;
        }

        console.error(e);
    }

    // render() {
    if (redirectToHome) {
        return <Redirect to='/'/>;
    }

    return <></>;
    // }
}

export default GlobalErrorHandler;
