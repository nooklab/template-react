/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/27
 */

import {Field, getIn, connect} from "formik";
import React, {useState} from "react";
import {ToggleButton} from "./ToggleButton";
import {StarMark} from "@components/FormikCommon/StarMark";
// import './FormField.scss'
// import {StarMark} from "@components/FormField2/StarMark";


export const FormikTagSelect = connect((props) => {
    let {star = false, list, label, name, formik} = props
    const {setFieldValue} = formik
    const value = getIn(formik.values, name);
    const error = getIn(formik.errors, name);
    const touched = Boolean(getIn(formik.touched, name));
    const showError = touched && !!error;
    // const [selected, setSelected] = useState(value)
    if (star) {
        label = <StarMark label={label}/>
    }

    function onChange(name, checked) {
        if (checked) {
            value.push(name)
        } else {
            const index = value.indexOf(name)
            if (index >= 0) {
                value.splice(index, 1)
            }
        }
        // setSelected(selected)
        // console.log(selected)
        setFieldValue(name, value)
    }

    return (
        <div className="form-group">
            <div className="form-control-space">
            <label className="form-label">{label}</label>
            <div role="group" aria-label="Basic checkbox toggle button group">
                {
                    list.map((item, index) => (
                        <ToggleButton
                            key={index}
                            className="tag-select__item"
                            name={item}
                            onChange={onChange}/>
                    ))
                }
            </div>
            {showError && <div className='invalid-feedback d-block'>
                {error}
            </div>}
        </div>
        </div>
    )
})

