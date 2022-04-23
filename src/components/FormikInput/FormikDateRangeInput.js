/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/27
 */

import {Field, getIn, connect} from "formik";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import dayjs from "dayjs";


export const FormikDateRangeInput = connect((props) => {
    const {count, name, formik, placeholder, disabled = false, onApply, help, minDate} = props
    const {t} = useTranslation();
    let value = getIn(formik.values, name);
    const error = getIn(formik.errors, name);
    const touched = Boolean(getIn(formik.touched, name));
    const showError = touched && !!error;
    const {handleChange, handleBlur} = formik
    // const showError = !!error;
    if (!value) {
        // const now = dayjs().format('YYYY-MM-DD')
        value = ['', '']
    }

    function setPicker(picker) {
        value[0] = dayjs(picker.startDate).format('YYYY-MM-DD')
        value[1] = dayjs(picker.endDate).format('YYYY-MM-DD')
        // setRange(value)
        formik.setFieldValue(name, value)
    }


    function handleApply(event, picker) {
        if (disabled) return
        setPicker(picker)
        if (onApply) {
            onApply(picker)
        }
    }

    // const minDate = dayjs().add(10, 'd').format('YYYY-MM-DD')

    return (
        <div>
            <DateRangePicker onApply={handleApply}
                             initialSettings={{
                                 minDate,
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
                             disabled={disabled}>
                <div className="input-group" disabled={disabled}>
                    <input type="text" className="form-control"
                           name={name}
                           value={`${value[0]} - ${value[1]}`}
                           disabled={disabled}
                           readOnly={true}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           placeholder="Search"/>
                    <span className="fa fa-calendar input-inside-right-icon" />
                </div>
            </DateRangePicker>
            {!!help && <div className='formik-text-input--help'><pre>{help}</pre></div>}
            {showError && <div className='invalid-feedback d-block'>
                {error}
            </div>}
        </div>
    )
})


