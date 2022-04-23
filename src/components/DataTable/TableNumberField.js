

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/20
 */

import React from "react";
import _ from 'lodash'

export const TableNumberField = props => {
    const {record, source, locale, ...rest} = props
    let text = _.get(record, source)
    if (locale && text) {
        text = Number(text).toLocaleString()
    }
    return <div {...rest}>
        {text}
    </div>
}
