

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/06/11
 */


import React from "react";
import AspectRatioImage from "@components/AspectRatioImage";
import avatarPlaceholder from '../../assets/images/avatar-placeholder.png';
import './BloggerForm.scss'

function hideName(name) {
    if (!name) return ''
    const a = name.substr(0, 3)
    const b = '*'.repeat(name.length - 3)
    return a + b
}

export const BloggerInfo = (props) => {
    const {user,channel} = props
    let {channelKey, thumbURL} = channel
    let {age, gender, region} = user
    // return <div>{channelKey}/{age}/{gender}/{region}</div>
    // const thumbURL = '/img/sample/img.png'
    thumbURL = thumbURL || avatarPlaceholder
    const ratio = 1
    age = age || "**"
    gender = gender || "****"
    region = region || "****"
    let str = gender ? gender : ''
    if (age) {
        if (str) {
            str += ' / '
        }
        str += age
    }
    if (region) {
        if (str) {
            str += ' / '
        }
        str += region
    }
    return <>
        <div className="blogger__container">
        <div className="row">
            <div className="col-5">
                <div
                    className='blogger__img'
                    style={{
                        backgroundImage: `url(${thumbURL})`,
                        backgroundSize: "cover",
                        // paddingTop: Math.floor(100 / ratio) + '%',
                        borderRadius: `${30}px`
                    }}/>
            </div>
            <div className="col-7">
                <div className="blogger__name">{hideName(channelKey)}</div>
                <div className="blogger__prop">{str}</div>
            </div>
        </div>
        </div>
    </>
}
