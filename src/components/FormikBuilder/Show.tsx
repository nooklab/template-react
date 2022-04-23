/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/08/14
 */

import React, {useContext, useEffect, useState} from "react";
import {ResourceContext} from "@core/ResourceContext";
import LoadingBox from "@components/LoadingBox";
import useDataProvider from "@core/data/useDataProvider";
import {withRouter} from "react-router-dom";


export const Show = withRouter((props: any) => {
    const {resource, onLoad} = props
    const [loading, setLoading] = useState(true);
    const [record, setRecord]: [any, any] = useState({})
    const context = useContext(ResourceContext);
    const dataProvider = useDataProvider()
    context.resource = resource
    const {children} = props

    const id = Number(props.match.params.id)
    // console.log('show', id)

    useEffect(() => {
        setLoading(true)
        loadRecord().then(r => {
            setRecord(r)
            setLoading(false)
        })
    }, [])

    async function loadRecord() {
        // console.log('get-campaign')

        const result = await dataProvider.getOne(resource, {
            id
        })
        onLoad(result)
        // setCampaign({
        //     ...result
        // })
        // const report  = await simpleQuery('campaign', `/${id}/report`, '', true)
        // setResult(report)
        // console.log('get-campaign-done:', result)
        return result
    }

    if (loading) {
        return <LoadingBox/>;
    }

    return <>
        {children(record)}
    </>
})
