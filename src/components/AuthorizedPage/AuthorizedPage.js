

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/24
 */

import {useAuthState, useGetIdentity} from "@core/auth";
import {Redirect} from "react-router-dom";
import View from "@components/View";
import React from "react";

export const AuthorizedPage = props => {
    const {redirect, classes, children, sideView, redirectEmailVerify} = props
    const {authenticated} = useAuthState()
    const {identity} = useGetIdentity()

    if (!authenticated) {
        return <Redirect to={redirect}/>;
    }

    if (identity) {
        if (!identity.emailVerified) {
            // 로그인 되었으나, 이메일 인증이 되지 않음
            return <Redirect to={redirectEmailVerify}/>;
        }
    }
    // return <SideView header={activeItem.title} menuGroups={menuGroups}>
    return <View vertical fill scrollable>
        <div className={`container`}>
            {(typeof children === 'function' ? children() : children)}
        </div>
    </View>
}
