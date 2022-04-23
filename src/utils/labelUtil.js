/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/11/06
 */


import _ from 'lodash'


export function convertText(text) {
    return _.memoize((text) => {
        return text
    })
}
