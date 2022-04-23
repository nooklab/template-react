

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/06/11
 */


import React from "react";
import './BloggerForm.scss'


export const BloggerKeyword = (props) => {
    const {value, small=false} = props
    const btnSmall = small ? 'btn-sm' : ''
    return <>
            {value.map((k, index) => (
                <button key={index} type="button" className={"btn btn-dark small blogger__chip " + btnSmall}>{k}</button>
            ))}
        </>
}
