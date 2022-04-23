/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/08/14
 */

import React, {useContext, useEffect, useMemo, useState} from "react";
import {ResourceContext} from "@core/ResourceContext";
import {Formik} from 'formik';
import useDataProvider from "@core/data/useDataProvider";
// import {MobXProviderContext} from "mobx-react";
import LoadingBox from "@components/LoadingBox";
import _ from 'lodash'
import {useTranslation} from "react-i18next";
import {useAlert} from "@components/Alert";
import {useHistory} from "react-router-dom";




export const Create = props => {
    const {resource, validate, validationSchema, transform, defaultValue, redirect, onSuccess, preload} = props
    const [loading, setLoading] = useState(true);
    const {t} = useTranslation()
    const history = useHistory()
    // const [preloadData, setPreloadData]: [any, any] = useState({});
    const [finalInitialValues, setFinalInitialValues]: [any, any] = useState({});
    const context = useContext(ResourceContext);
    const dataProvider = useDataProvider()
    // const {alertStore} = useContext(MobXProviderContext)
    const alert = useAlert()
    context.resource = resource
    const {children} = props


    useEffect(() => {

        // 사전 데이터를 로드한다
        if (preload) {
            setLoading(true)
            preload().then(preloadData => {
                // 사전데이터는 리턴값이 있는 경우 초기값으로 사용된다
                const finalInit = _.merge({}, defaultValue, preloadData)
                setFinalInitialValues(finalInit)
                setLoading(false)
            })
        } else {
            setLoading(false)
        }
    }, [])

    async function onSubmit(values: any, formikProps : any) {
        const {setSubmitting} = formikProps;
        try {
            // 캠페인 신청
            // await CampaignTransform(values)
            if (transform) {
                await transform(values, formikProps, dataProvider)
            }

            let result = await dataProvider.create(resource, {
                data: values,
            })
            if (result.error) {
                // 생성중 에러 발생
                alert.error(result.error.msg)
                setSubmitting(false); //// Important
                // setRenderCount(renderCount + 1)
                return
            }

            setSubmitting(false); //// Important

            if (onSuccess) {
                onSuccess()
            }


            if (redirect) {
                if (typeof redirect === 'function') {
                    redirect(result);
                } else {
                    history.push(redirect);
                }
            } else {
                history.push(`/${resource}`);
            }

        } catch (err) {
            const a = 0
            console.log(err)
            alert.error(err.message)
        }
    }

    if (loading) {
        return <LoadingBox/>;
    }

    function onValidate(values) {
        if (validate) {
            return validate(values, t)
        }
    }


    // console.log('finalInitialValues', finalInitialValues)

    return <>
        <Formik
            onSubmit={onSubmit}
            initialValues={finalInitialValues}
            validate={onValidate}
            validationSchema={validationSchema}
        >
            {(formikProps) => (
                typeof(children) === 'function' ? children(formikProps) : children
            )}

        </Formik>
    </>
}
