

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/20
 */

import React from "react";
import _ from 'lodash'
import SignIn from "@assets/images/SignIn.svg";
import dayjs from "dayjs";


export const TableTextField = props => {
    const {record, source} = props
    return <>
        {_.get(record, source)}
    </>
}

export const TableDateField = props => {
    const {record, source} = props
    const text = dayjs(_.get(record, source)).format('YYYY-MM-DD')
    return <>
        {text}
    </>
}

export const TableIndexField = props => {
    const {recordIndex} = props
    return <>
        {recordIndex + 1}
    </>
}


export const TableBloggerField = props => {
    const {record, source} = props
    function getBlogURL(channelKey) {
        return `https://blog.naver.com/${channelKey}`
    }
    function onClick() {
        const channel = _.get(record, props.channel)
        const URL = getBlogURL(channel)
        // console.log(URL)
        window.open(URL, '_blank');
    }
    return <>
        {_.get(record, source)}
        <img className="mx-1" src={SignIn} style={{width: '24px', cursor: 'pointer'}} onClick={onClick}/>
    </>
}

