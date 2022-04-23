/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/08
 */

import {Field, getIn, connect, useFormikContext} from "formik";
import React from "react";
import {useTranslation} from "react-i18next";
import {Labeled} from "@components/FormikField";
import {Form} from "react-bootstrap";

export const FormikSelectInput = props => {
    const formik = useFormikContext()
    const {t} = useTranslation();
    let {
        type,
        disabled,
        name,
        placeholder,
        validate,
        component,
        children,
        rows = 3,
        postText,
        help,
        addLabel = true,
        size,
        choices,
        ...rest
    } = props
    // const value = getIn(formik.values, name);
    const error = getIn(formik.errors, name);
    const touched = Boolean(getIn(formik.touched, name));
    const showError = touched && !!error;

    function handleChange(ev) {
        const {setFieldValue} = formik
        const {value} = ev.target
        setFieldValue(name, value)
    }

    return (
        <div className="form-group">
            <div className="form-control-space">
                {/*{label ? <label htmlFor={name} className="form-label">{label}</label> : ''}*/}
                {addLabel ? <Labeled {...props} /> : ''}
                <div className="input-group">
                    <Form.Select aria-label="선택"
                                 disabled={disabled}
                                 id={name}
                                 name={name}
                                 component={component}
                                 type={type}
                                 className="form-control"
                                 rows={rows}
                                 placeholder={placeholder}
                                 validate={validate}
                                 style={{fontSize: `${size}px`}}
                                 onChange={handleChange}
                                 {...rest}>
                        <option className={'formik-place-holder'}>{placeholder ? placeholder : '선택'}</option>
                        {children}
                    </Form.Select>
                    {postText ? <span className="input-group-text">{postText}</span> : ''}
                </div>
                {!!help && <div className='formik-text-input--help'>
                    {help}
                </div>}
                {showError && <div className='invalid-feedback d-block' data-cy={'error'}>
                    {error}
                </div>}
            </div>

        </div>
    )
}


