
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/18
 */

import ReactTooltip from "react-tooltip";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import './HelpTooltip.scss'


export const HelpTooltip = props => {
    const {t} = useTranslation()
    const [randomID, ] = useState(String(Math.random()))
    const {children, label = ''} = props
    return <>
        <ReactTooltip
            id={randomID}
            delayShow={800}
            delayHide={300}
            className={'help-tooltip'}
            textColor={'#5C5C5C'}
            backgroundColor={'#F7FEF9'}
            effect='solid'
            border={true}
            borderColor={'#DBDBDB'}
            multiline={true}
        >
            {children}
        </ReactTooltip>
        <span>{t(label)}</span><span> </span><i className="bi bi-question-circle" data-tip data-for={randomID}/>
    </>
}
