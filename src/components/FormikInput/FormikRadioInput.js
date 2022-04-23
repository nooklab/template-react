
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/03
 */

import {connect, Field, getIn} from "formik";
import React from "react";
// import cn from 'classnames';
import {Labeled} from "@components/FormikField";


export const FormikRadioInput = connect((props) => {
    const {name, type, formik, selection, disabled=false, vertical=false} = props
    const error = getIn(formik.errors, name);
    const touched = Boolean(getIn(formik.touched, name));

    const showError = touched && !!error;
    function onChange(e) {
        if (type === 'number') {
            formik.setFieldValue(name, Number(e.target.value))
        } else {
            formik.setFieldValue(name, e.target.value)
        }
    }
    // const group = `btn-group` + vertical ? '-vertical' : '';
    const group = vertical ? `btn-group-vertical` : 'btn-group';
    return (<>
            {/*<div className="btn-group row radio-button__group " role="group" aria-label="">*/}
            {/*    {selection.map((item, index) => (<div key={index} className="col">*/}
            {/*        <Field*/}
            {/*            disabled={disabled}*/}
            {/*            type="radio"*/}
            {/*            className={'form-check-input'}*/}
            {/*            name={name}*/}
            {/*            id={"btn-radio" + index}*/}
            {/*            value={item.value}*/}
            {/*            onChange={onChange}*/}
            {/*            autoComplete="off"*/}
            {/*        />*/}
            {/*        <label className="form-check-label"*/}
            {/*               htmlFor={"btn-radio" + index}>{item.label}</label>*/}
            {/*    </div>))}*/}
            {/*</div>*/}
        <div className={group + " "} role="group" aria-label="">
            {selection.map((item, index) => (<div key={index} className="">
                <Field
                    disabled={disabled}
                    type="radio"
                    className={'form-check-input'}
                    name={name}
                    id={`btn-radio-${name}` + index}
                    value={item.value}
                    onChange={onChange}
                    autoComplete="off"
                />
                <label className="form-check-label px-1" {...props}
                       htmlFor={`btn-radio-${name}` + index}>{item.label}</label>
                {/*<Labeled htmlFor={"btn-radio" + index} {...props} label={item.label} className={'px-1'}/>*/}
            </div>))}
        </div>
            {showError && <div className='invalid-feedback d-block'>{error}</div>}
    </>)
})
