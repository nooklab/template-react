/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/08/14
 */

import React, {useEffect, useState} from "react";
import {useResourceContext} from "@core/ResourceContext";
import {withPagination} from "@components/PaginationRenderer";
import useDataProvider from "@core/data/useDataProvider";
import LoadingBox from "@components/LoadingBox";
import {BigIconView} from "@components/BigIconView";
import {Pagination} from "@components/Pagination/Pagination";
import {Spacer2} from "@components/Layout";


const defaultQueryValues = {
    page: 1,
    size: 10,
};

const DefaultEmpty = () => {
    const src = '/img/error.png'
    const title = '항목이 없습니다'
    return <>
        <Spacer2 pt={50}/>
        <BigIconView src={src} title={title} textList={[]} detail={null}/>
    </>
}





const PureList = props => {
    const {
        query,
        setTotal,
        queryMaxList = false,
        resource,
        filter,
        sort,
        onLoadFinished,
        empty,
        doQuery,
        pagination,
        cache,
        children
    } = props
    // const context = useContext(ResourceContext);
    const resourceContext = useResourceContext()
    const dataProvider = useDataProvider()
    const [loading, setLoading] = useState(false)
    const [list, setList]: any = useState([])


    // resourceContext.resource = resource
    useEffect(() => {
        getList().then(r => {})
    }, [query.page, filter, resourceContext.refresh])

    function doQueryMaxList(resource, params) {
        const newParams = Object.assign({}, params)
        newParams.pagination = {
            page: 1,
            perPage: 500,
        }
        return dataProvider.getList(resource, newParams)
    }

    async function getList() {
        setLoading(true)
        let {page, size} = query
        let r
        const params = {
            cache,
            pagination: {
                page,
                // perPage: size,
                perPage: size,
            },
            filter,
            sort
        }
        if (pagination) {
            params.pagination = pagination
        }
        if (!doQuery) {
            if (queryMaxList) {
                // query 시 페이징을 무시한다
                r = await doQueryMaxList(resource, params)
            } else {
                r = await dataProvider.getList(resource, params)
            }
        } else {
            r = await doQuery(resource, params)
        }
        if (onLoadFinished) {
            r = await onLoadFinished(r, params)
        }
        setTotal(r.total)
        setList(r.data)
        setLoading(false)
    }

    if (loading) {
        return <LoadingBox/>;
    }

    if (list.length === 0 && empty !== false) {
        return empty ? empty : <DefaultEmpty/>
    }

    return <>
        {children({records: list, query})}
    </>
}


export const List = withPagination(props => {
    const {paging = true, query, onPageChange} = props
    return <>
        <PureList {...props}/>
        <Spacer2 pt={40}/>
        {paging ? <Pagination {...query} onChange={onPageChange}/> : ''}
    </>
}, defaultQueryValues)




export const DataList = props => {
    let {children} = props
    children = Array.isArray(children) ? children : [children]
    return <>
        {children.map((item ,index) => {
            return <div key={index}>
                {item}
            </div>
        })}
    </>
}
