/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/11/12
 */


import Avatar from "@components/Avatar";
import './AvatarButton.scss'
import {useTranslation} from "react-i18next";
import personCircle from '../../assets/images/person-circle.svg'

export const AvatarButton = props => {
    const {t} = useTranslation();
    const {onClick} = props
    // return <button type='button' className='btn avatar-button' onClick={onClick}>
    //     <Avatar src={personCircle} size='29px'/>
    //     <span className="fw-bold label">{t('NotLoggedInMenu.logIn')}</span>
    // </button>
    return <button type='button' className='btn btn-dark' onClick={onClick}>
        {/*<Avatar src={personCircle} size='29px'/>*/}
        <span >{t('NotLoggedInMenu.logIn')}</span>
    </button>
}
