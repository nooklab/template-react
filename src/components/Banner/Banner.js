
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/06/26
 */

import React from "react";
// import './Banner.scss'
// import AspectRatioImage from "@components/AspectRatioImage";

export const Banner = (props) => {

    const {src, size} = props
    const c = "banner__"+size
    // const c = ''
    return <div className="row">
        <div className={"d-flex banner justify-content-center "}>
            <div className={"banner__medium d-flex align-items-center"}>
                <img src={src}/>
            </div>
        </div>
    </div>
}
