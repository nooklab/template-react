

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/20
 */

import React from "react";
// import _ from 'lodash'
import {connect, Field, getIn} from "formik";
import cn from "classnames";

export const TableTextInput = connect((props) => {
    const {type, disabled, name, source, placeholder, validate, component, formik, children, rows=3, classes, min, recordIndex, onChange} = props
    const rowName = `${name}[${recordIndex}].${source}`
    const error = getIn(formik.errors, rowName);
    const touched = Boolean(getIn(formik.touched, rowName));
    const showError = touched && !!error;
    return (
        <>
            <Field disabled={disabled}
                   id={rowName}
                   name={rowName}
                   component={component}
                   type={type}
                   rows={rows}
                   className={cn("form-control", classes)}
                   placeholder={placeholder}
                   min={min}
                   validate={validate}>
                {children}
            </Field>
            {showError && <div className='invalid-feedback d-block'>{error}</div>}
        </>
    )
})
