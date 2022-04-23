/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/15
 */


import React, {useMemo, useState} from "react";
import './Filters.scss'
import _ from 'lodash'

/**
 * 레코드 리스트의 일정 갯수만을 선택적으로 텍스트로 바꾸어 반환한다
 * @param records
 * @param source
 * @param maxCount
 */
function omitRecordListToText(records, source: string, maxCount: number) {
    let len = Math.min(records.length, maxCount);
    let text = records.filter((item, index) => index < len).map(item => _.get(item, source)).join(", ")
    if (records.length > maxCount) {
        const rest = records.length - maxCount
        text += `, ... (+${rest})`
    }
    return text
}

/**
 * 다중선택 가능일때(multiple) 사용하는 필터 아이템
 * @param props
 * @constructor
 */
const CheckDropdownListItem = props => {
    const {item, source, selected} = props
    const text = _.get(item, source)
    const check = selected.find(s => s[source] === text) ? 'item-check' : '';
    return <a id={item.id} className={`dropdown-item ${check}`} href="#">{text}</a>
}

/**
 * 단일 선택용 필터 아이템
 * @param props
 * @constructor
 */
const DropdownListItem = props => {
    const {source, item = {}} = props
    return <a id={item.id} className="dropdown-item" href="#">{item[source]}</a>
}

/**
 * 드롭다운 필터를 구성한다
 * choices 는 배열로서 선택 가능한 record list 가 전달되어야 한다.
 * 각 record 는 고유의 id 를 포함해야 한다
 * @param props
 * @constructor
 */
export const DropDownFilter = props => {
    const {label, reset = false,  placeHolder, choices, multiple, onSelect, source, size, maxMultiItemShow = 3, noSelectedPlaceHolder = false} = props
    const [selected, setSelected] = useState(multiple ? [...choices] : [])

    const selectedText = useMemo(() => {
        return noSelectedPlaceHolder ? placeHolder : selected.length > 0 ? omitRecordListToText(selected, source, maxMultiItemShow) : placeHolder
    }, [selected])

    function handleSelect(e) {
        const {target} = e
        const id = target.id
        if (multiple) {
            // const foundIndex = selected.indexOf(
            const found = selected.find(item => item.id == id)
            let newSelected
            if (found) {
                // 포함중
                newSelected = selected.filter(item => item.id != id)
                // selected.splice(foundIndex, 1)
            } else {
                // 미 포함
                const target = choices.find(item => item.id == id)
                newSelected = [
                    ...selected,
                    target,
                ]
            }
            setSelected(newSelected)
            if (onSelect) {
                onSelect(newSelected)
            }
        } else {
            if (onSelect) {
                const found = choices.find(item => item.id == id)
                setSelected([found])
                onSelect([found])
            }
        }
    }

    function onReset(e) {
        setSelected([])
        if (onSelect) {
            onSelect([])
        }
    }

    return <div>

        <div className='filter-label'>{label}</div>
        <div className="btn-group dropdown-filter" role="group" aria-label="Button group with nested dropdown">
            {reset ?
            <button type="button" className="btn btn-secondary"
                    disabled={selected.length === 0}
                    onClick={onReset}>
                <i className="bi bi-x"/>
            </button>
                : ''}
            <div className="dropdown">
                <button className={"btn btn-secondary dropdown combo " + size}
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedText}
                </button>
                <ul className={"dropdown-menu list " + size} aria-labelledby="dropdownMenuButton1"
                    onClick={handleSelect}>
                    {multiple
                        ? choices.map((choice, index) => <li key={index} data-index={index}><CheckDropdownListItem
                            item={choice} source={source} selected={selected}/></li>)
                        : choices.map((choice, index) => <li key={index} data-index={index}><DropdownListItem
                            item={choice} source={source}/></li>)
                    }
                </ul>
            </div>
        </div>
    </div>
}
