/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/20
 */

import React, {cloneElement, useMemo} from "react";
import './DataTabel.scss'

export const DataTable = props => {

    const {children, records, disabled, postRow, query = {page: 1, size: 10}} = props
    const resultRecord = useMemo(() => {
        return postRow ? postRow(records) : null
    }, [records, postRow])

    const childrenArray = Array.isArray(children) ? children : [children]
    const header = childrenArray.map((child) => {
        const {label, source, align, width} = child.props
        return {
            label,
            source,
            className: align ? 'table-align-' + align : '',
            style: width ? {width: width + 'px'} : {},
            child
        }
    })

    function onClick() {
    }

    return <>
        <table className="table table-hover table-borderless">
            <thead>
            <tr className={'table-header'}>
                {
                    header.map((t, index) => {
                        return <th key={index} scope="col" className={t.className} style={t.style}>{t.label}</th>
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                records.map((record, rowIndex) => {
                    return <tr key={rowIndex} className={rowIndex & 0x1 ? 'table-default' : 'table-info'}
                               data-index={rowIndex} onClick={onClick}>
                        {
                            header.map((item, index) => {
                                const {child, source, ...rest} = item
                                return <td key={index} className={'align-middle table-row'}>
                                    {cloneElement(
                                        child, {
                                            record,
                                            source,
                                            recordIndex: rowIndex + (query.page - 1) * query.size,
                                            disabled,
                                            ...rest
                                        })}
                                </td>
                            })
                        }
                    </tr>
                })
            }
            {
                resultRecord ? <tr key="result" className={''} data-index={-1}>
                    {
                        resultRecord.map((item, index) => {
                            const headerItem = header[index]
                            const {className} = headerItem
                            return <td key={index} className={'align-middle table-result ' + className}>
                                {item}
                            </td>
                        })
                    }
                </tr> : undefined
            }
            </tbody>
        </table>
    </>
}
