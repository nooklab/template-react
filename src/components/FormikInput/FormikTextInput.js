
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/08
 */

import {Field, getIn, connect} from "formik";
import React from "react";
// import {useTranslation} from "react-i18next";
// import {HelpTooltip} from "@components/HelpTooltip/HelpTooltip";
// import {StarMark} from "@components/FormikCommon";
import {Labeled} from "@components/FormikField";



export const FormikTextInput = connect((props) => {
    // const { t } = useTranslation();
    let {type, disabled, name, placeholder, validate, component, formik, children, rows=3, postText,
        help, addLabel=true, size, showValid, ...rest} = props
    // const value = getIn(formik.values, name);
    const error = getIn(formik.errors, name);
    const touched = Boolean(getIn(formik.touched, name));
    const showError = touched && !!error;
    let validString = ''
    if (showValid) {
        validString = touched && !error ? 'input-valid' : '';
    }
    return (
        <div className="form-group">
            <div className="form-control-space">
                {/*{label ? <label htmlFor={name} className="form-label">{label}</label> : ''}*/}
                {addLabel ? <Labeled {...props} /> : ''}
                {/*<div className="input-group">*/}
                <Field disabled={disabled}
                       id={name}
                       name={name}
                       component={component}
                       type={type}
                       className={"form-control " + validString}
                       rows={rows}
                       placeholder={placeholder}
                       validate={validate}
                       style={{fontSize: `${size}px`}}
                       {...rest}
                >
                    {children}
                </Field>
                {postText ? <span className="input-group-text">{postText}</span> : '' }
                {/*</div>*/}
                {!!help && <div className={'formik-text-input--help'}>{help}</div>}
                {showError && <div className='invalid-feedback d-block' data-cy={'error'}>
                    {error}
                </div>}
            </div>

        </div>
    )
})


