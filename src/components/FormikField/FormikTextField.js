
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/08
 */

import {Field, getIn, connect} from "formik";
import React from "react";
import cn from "classnames";




export const FormikTextField = connect((props) => {
    const {type, disabled, name, placeholder, validate, component, formik, children, rows=3, classes} = props
    const error = getIn(formik.errors, name);
    const touched = Boolean(getIn(formik.touched, name));
    const showError = touched && !!error;
    return (
        <>
            <Field disabled={disabled}
                   id={name}
                   name={name}
                   component={component}
                   type={type}
                   rows={rows}
                   className={cn("form-control", classes)}
                   placeholder={placeholder}
                   validate={validate}>
                {children}
            </Field>
            {showError && <div className='invalid-feedback d-block'>{error}</div>}
        </>
    )
})
