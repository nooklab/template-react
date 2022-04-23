/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/20
 */

import React, {cloneElement} from "react";


export const HorizontalDataTable = props => {

    const {children, records} = props

    const childrenArray = Array.isArray(children) ? children : [children]
    const header = childrenArray.map((child, index) => {
        const {label, source} = child.props
        return {
            label,
            source,
            child
        }
    })

    function onClick() {

    }

    return <>
        <table className="table table-hover">
            <tbody>
            {
                header.map((headerItem, rowIndex) => {
                    return <tr key={rowIndex} className={rowIndex & 0x1 ? 'table-default' : 'table-info'}
                               data-index={rowIndex} onClick={onClick}>
                        <th>{headerItem.label}</th>
                        {
                            records.map((item, index) => {
                                const {child, source} = headerItem
                                return <td key={index} className={'align-middle'}>
                                    {cloneElement(
                                        child, {
                                            record: item,
                                            source,
                                        })}
                                </td>
                            })
                        }
                    </tr>
                })
            }
            </tbody>
        </table>
    </>
}
