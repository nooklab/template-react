
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/11/06
 */


import React from "react";
import './Typography.scss'
import {Spacer2} from "@components/Layout";

export const Typography = props => {
    const {label, center = false, className, size, bold, color, lh, ...rest} = props
    const ctn = center ? 'd-flex flex-row justify-content-center' : '';
    return <div className={`${ctn} ${className} `} style={{
        fontSize: size,
        fontWeight: bold ? 'bold' : undefined,
        lineHeight: lh || '140%',
        letterSpacing: '-0.03em',
        color,
    }} {...rest}>{label}</div>
}

export const Typography2 = props => {
    const {className, mt, children, ...rest} = props
    return <>
        {mt ? <Spacer2 pt={mt}/> : ''}
        <div className={className} {...rest}>{children}</div>
    </>
}

export const TypographySpan = props => {
    const {label, center = false, className, size, bold, ...rest} = props
    const ctn = center ? 'd-flex flex-row justify-content-center' : '';
    return <span className={`${ctn} ${className} `} style={{
        fontSize: size,
        fontWeight: bold,
        lineHeight: '140%',
        letterSpacing: '-0.03em',
    }} {...rest}>{label}</span>
}

export const TypographyEx = props => {
    const {label, center = false, className, children, ...rest} = props
    const ctn = center ? 'd-flex flex-row justify-content-center' : '';
    return <div className={`${ctn} ${className} `} {...rest}>{children}</div>
}




export const UnderBar = props => {
    const {width = 10, size, center, color, y} = props
    // const ctn = center ? 'd-flex flex-row justify-content-center' : '';
    return <div className={`${center ? 'mx-auto' : ''} under-bar`} style={{
        width: width,
        fontSize: size,
        // marginTop: '40px',
        borderBottom: `5px solid ${color}`,
        marginTop: y ? y : 0,
    }}> </div>
}
