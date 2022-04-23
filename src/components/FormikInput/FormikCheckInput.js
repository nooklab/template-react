
/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/03
 */




import React from "react";
import {connect, Field, getIn} from "formik";
import {Labeled} from "../FormikField";



export const FormikCheckInput = connect((props) => {
    const {name, validate, formik, disabled, onClick, className} = props
    const error = getIn(formik.errors, name);
    const touched = Boolean(getIn(formik.touched, name));

    const showError = touched && !!error;
    return (
        <div className={"form-group " + className} >
            <div className='form-check ' >
                <Labeled htmlFor={name} {...props} labelBase={'Campaign.fields'}/>
                <Field disabled={disabled} type="checkbox" className="form-check-input"
                       id={name} name={name} onClick={onClick}/>
            </div>
            {showError && <div className='invalid-feedback d-block'>
                {error}
                </div>}
        </div>
    )
})


// export default connect(FormikCheckField);
