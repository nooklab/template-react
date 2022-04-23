
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/18
 */



import React from "react";
import {HelpTooltip} from "@components/HelpTooltip/HelpTooltip";
import cn from "classnames";


export const Section = (props) => {
    let { label, children, tooltip, border = false, size='normal'} = props
    let labelClass = 'section--label'
    if (tooltip) {
        label = <>{label}<HelpTooltip>{tooltip}</HelpTooltip></>
    }
    if (size === 'small') {
        labelClass = 'section--small-label'
    }
    return <div className='section'>
        {!!label && <h3 className={labelClass}>{label}</h3>}
        <div className={cn('section--content', border && 'section--border')}>
            {children}
        </div>
    </div>
}


export const Section2 = (props) => {
    let { label, children, tooltip, type = 'label-16'} = props
    // let labelClass = 'label'
    if (tooltip) {
        label = <>{label}<HelpTooltip>{tooltip}</HelpTooltip></>
    }
    // if (size === 'small') {
    //     labelClass = 'small-label'
    // }
    return <div className='section2'>
        {!!label && <h3 className={type}>{label}</h3>}
        <div className={'content'}>
            {children}
        </div>
    </div>
}
