
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/11
 */

import React from "react";


export const StarMark = ({label}) => (
    <><span className="label-star">* </span>{label}</>
)

export const StarMarkPost = ({label}) => (
    <>{label}<span className="label-star"> *</span></>
)
