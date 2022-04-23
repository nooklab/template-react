

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/06/11
 */


import React from "react";
import './BloggerForm.scss'


export const BloggerShowContent = (props) => {
    const {value} = props
    return <>
            {Object.keys(value).map((k, index) => {
                return <button key={index} type="button" className="btn btn-outline-info ">{k}</button>
            })}
        </>
}
