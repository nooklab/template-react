/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/08/14
 */

import React, {useContext, useEffect, useState} from "react";
import {Formik} from 'formik';
import {ResourceContext} from "@core/ResourceContext";
import LoadingBox from "@components/LoadingBox";
import useDataProvider from "@core/data/useDataProvider";
import {useTranslation} from "react-i18next";
// import {MobXProviderContext} from "mobx-react";
import {withRouter} from "react-router-dom";
import {useAlert} from "@components/Alert";



export const Edit = withRouter((props: any) => {
    const {resource, onLoad, transform, validate, redirect, onSuccess} = props
    const {t} = useTranslation()
    // const {alertStore} = useContext(MobXProviderContext)
    const context = useContext(ResourceContext);
    const [cache, setCache] = useState(false)
    const [loading, setLoading] = useState(true);
    const [record, setRecord]: [any, any] = useState({})
    const dataProvider = useDataProvider()
    const alert = useAlert()
    context.resource = resource
    const {children} = props


    const id = Number(props.match.params.id)

    useEffect(() => {
        setLoading(true)
        loadRecord().then(r => {
            setRecord(r)
            setLoading(false)
        })
    }, [cache])

    async function loadRecord() {
        const result = await dataProvider.getOne(resource, {id, cache})
        setCache(true)
        onLoad(result)
        return result
    }

    if (loading) {
        return <LoadingBox/>;
    }

    async function onSubmit(values: any, formikProps: any) {
        const {setSubmitting} = formikProps;
        try {
            if (transform) {
                await transform(values, formikProps, dataProvider)
            }
            await dataProvider.update(resource, {
                id: record.id,
                data: {
                    ...values
                }
            })

            setSubmitting(false); //// Important
            // alert.alert("안내", '캠페인을 신청했습니다')
            setCache(false)

            if (onSuccess) {
                onSuccess()
            }

            if (redirect) {
                props.history.push(redirect);
            } else {
                props.history.push(`/${resource}`);
            }

            // await onSelectTab(tabIndex, tabIndex + 1, {})
            // props.history.push('/campaign')

        } catch (err) {
            const a = 0
            console.log(err)
            alert.error(err.message)
        }
    }

    async function onValidate(values) {
        if (validate) {
            return validate(values, t)
        }
    }

    function invalidateCache() {
        setCache(false)
    }

    return <>
        <Formik
            onSubmit={onSubmit}
            initialValues={record}
            validate={onValidate}
        >
            {(formikProps) => (
                children(formikProps, invalidateCache)
            )}
        </Formik>
    </>
})
