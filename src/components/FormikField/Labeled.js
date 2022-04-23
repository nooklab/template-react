
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/08/14
 */


import {useTranslation} from "react-i18next";
import React from "react";
import {useResourceContext} from "@core/useResourceContext";
import {HelpTooltip} from "@components/HelpTooltip/HelpTooltip";
import {StarMark, StarMarkPost} from "@components/FormikCommon";


export const Labeled = props => {
    const { t } = useTranslation();
    const context = useResourceContext()

    let {name, label, required, tooltip, requiredpost, className} = props

    const labelBase = context.resource ? context.resource + '.fields' : '';
    // label = typeof label === 'string' ? t(label || `${labelBase}.${name}`) : label
    label = typeof label === 'object' ? label : t(label || `${labelBase}.${name}`)
    // let finalLabel = label
    if (required) {
        label = <StarMark label={label}/>
    }
    if (requiredpost) {
        label = <StarMarkPost label={label}/>
    }

    if (tooltip) {
        label = <>{label}<HelpTooltip>{tooltip}</HelpTooltip></>
    }
    return <>
        {label ? <label htmlFor={name} className={"form-label " + className}>{label}</label> : ''}
    </>
}
