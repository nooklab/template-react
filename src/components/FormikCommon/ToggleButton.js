/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/03
 */

import cn from 'classnames';
import React, {useState} from "react";


export const ToggleButton = (props) => {
    const {value = false, name, type = 'dark', onChange, className} = props
    const [checked, setChecked] = useState(value)
    function onClick() {
        setChecked(!checked)
        if (onChange) {
            console.log('on-change:', name, !checked)
            onChange(name, !checked)
        }
    }
    const str = checked ? `btn-${type}` : `btn-outline-${type}`
    return (
        <button type="button" className={cn("btn ", str, className)} onClick={onClick}>{name}</button>
    )
}

