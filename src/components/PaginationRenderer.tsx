import React, {useState} from "react";
// import {QUERY_PAGE_SIZE} from "../utils/PageQuery";

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/04/28
 */

export const QUERY_PAGE_SIZE = 10


const WithPaginationRenderer = ({
                                    page = 1,
                                    size = QUERY_PAGE_SIZE,
                                    assumeNumeric = true,
                                    render,
                                    children
                                }: any) => {
    const [query, setQuery] = useState({page, size, total: 0})

    const onPageChange = (newPage: number) => {
        let {page, size, total} = query
        if (newPage !== page) {
            page = newPage
            setQuery({page, total, size})
        }
    }

    const setTotal = (total) => {
        let {page, size} = query
        setQuery({page, size, total})
    }

    if (render) {
        return render(query, setTotal, onPageChange);
    }

    if (typeof children === 'function') {
        return children(query, setTotal, onPageChange);
    }
    return <></>
}


export function withPagination(Component, defaultValues) {
    return (props) => <WithPaginationRenderer
        // defaultValues={defaultValues}
        {...defaultValues}
        render={(query, setTotal, onPageChange) => <Component
            {...props}
            query={query}
            setTotal={setTotal}
            onPageChange={onPageChange}
        />}
    />;
}
