

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/11/09
 */

// import {useTranslation} from "react-i18next";
import {HashLink} from "react-router-hash-link";
import React from "react";
import {useLocation} from "react-router";
import {FABQuestion} from "@components/Fab";

export const QuestionButton = props => {
    const location = useLocation()
    // const {t} = useTranslation();
    const smooth = location.pathname === '/'

    return <HashLink    smooth={smooth}
                        to={'/#question'} >
        {/*<button type='button' className='btn btn-naver' style={{borderRadius: '100px'}}>{t('NotLoggedInMenu.question')}</button>*/}
        <FABQuestion />
    </HashLink>
}
