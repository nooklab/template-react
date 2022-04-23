

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/18
 */


import dayjs from "dayjs";
import DateRangePicker from "react-bootstrap-daterangepicker";
import React, {useState} from "react";


export const DateRangeFilter = (props) => {
    const {label, name, placeholder, disabled = false, onApply, size=''} = props
    const [value, setValue] = useState(['', ''])

    function setPicker(picker) {
        const s = dayjs(picker.startDate).format('YYYY-MM-DD')
        const e = dayjs(picker.endDate).format('YYYY-MM-DD')
        setValue([s, e])
        return [s, e]
    }

    function handleApply(event, picker) {
        if (disabled) return
        const result = setPicker(picker)
        if (onApply) {
            onApply(result)
        }
    }

    // @ts-ignore
    return (<div className={'date-filter ' + size}><div className='filter-label'>{label}</div><DateRangePicker onApply={handleApply}
                             // disabled={disabled}
                             initialSettings={{
                                 // minDate,
                                 locale: {
                                     format: 'Y-MM-DD',
                                     applyLabel: "확인",
                                     cancelLabel: "취소",
                                     fromLabel: "From",
                                     toLabel: "To",
                                     // "customRangeLabel": "Custom",
                                     // "weekLabel": "W",
                                     "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
                                     "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                                     "firstDay": 1
                                 }
                             }}
                             >
                <div className="input-group"
                     // disabled={disabled}
                >
                    <input type="text" className="form-control"
                           name={name}
                           value={`${value[0]} - ${value[1]}`}
                           disabled={disabled}
                           readOnly={true}
                           // onChange={handleChange}
                           // onBlur={handleBlur}
                           placeholder="Search"/>
                    <span className="fa fa-calendar input-inside-right-icon" />
                </div>
            </DateRangePicker>
        </div>
    )
}
