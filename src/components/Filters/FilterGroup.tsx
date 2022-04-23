/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/15
 */

import React, {cloneElement} from "react";
import './Filters.scss'


export const FilterGroup = props => {
    const {children} = props
    const childrenArray = Array.isArray(children) ? children : [children]
    return <>
        <div className={'filter-group-container d-flex'}>

            {
                childrenArray.map(child => {
                    return <div className={'filter-item'}>
                        {cloneElement(child, child.props)}
                    </div>
                })
            }

        </div>
    </>
}
