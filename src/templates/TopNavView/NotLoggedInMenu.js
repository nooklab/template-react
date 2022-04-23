import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {AvatarButton} from "@templates/TopNavView/AvatarButton";


function NotLoggedInMenu({onLoginOpen}) {
    // const {t} = useTranslation();

    return <>
        <AvatarButton onClick={onLoginOpen}/>
    </>
}

NotLoggedInMenu.propTypes = {
    onLoginOpen: PropTypes.func
};

export default NotLoggedInMenu;
