
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/03
 */



import {connect, Field, getIn} from "formik";
import React from "react";
import {useTranslation} from "react-i18next";
import {StarMark, StarMarkPost} from "@components/FormikCommon";




export const FormikInlineRadioInput = connect((props) => {
    const { t } = useTranslation();
    let {name, required, label, validate, formik, selection, help, disabled, requiredpost} = props
    const value = getIn(formik.values, name);
    const error = getIn(formik.errors, name);
    const touched = Boolean(getIn(formik.touched, name));
    const showError = touched && !!error;
    label = t(label)
    // placeholder = t(placeholder)
    if (required) {
        label = <StarMark label={label}/>
    }
    if (requiredpost) {
        label = <StarMarkPost label={label}/>
    }
    return (
        <div className="form-group">
            <label role="group" className="col-3">{label}</label>
            {
                selection.map(item => (
                    <div key={item.label} className='form-check form-check-inline'>
                        <label className="form-check-label">
                            <Field type="radio" disabled={disabled} className="form-check-input" value={item.value} name={name}/>
                            {item.label}
                        </label>
                    </div>
                ))
            }
            {!!help && <div className='formik-text-input--help'>{help}</div>}
            {showError && <div className='invalid-feedback d-block'>
                {error}
                </div>}
        </div>
    )
})


// export default connect(FormikCheckField);
