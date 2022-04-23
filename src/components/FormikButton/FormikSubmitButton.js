/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/11
 */

import {connect} from "formik";
import cn from "classnames";
import React from "react";



export const FormikSubmitButton = connect((props) => {
    const { formik, buttonProps, children, ...rest } = props
    const { isSubmitting } = formik;
    const className=cn("btn", buttonProps)

    return <button className={className} type="button" type='submit' disabled={isSubmitting} {...rest}>{
        isSubmitting ? <span className='fas fa-circle-notch fa-spin' /> : children
    }</button>
})
