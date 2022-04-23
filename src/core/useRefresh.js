/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/19
 */

import {useResourceDispatchContext} from "@core/ResourceContext";
import {useCallback} from "react";

/**
 * List 를 refresh 한다. data 를 새로 쿼리한다
 * @param props
 * @returns {(function(): void)|*}
 */
export const useRefresh = () => {
    const dispatch = useResourceDispatchContext()
    return useCallback( () => {
        dispatch({
            type: 'LIST_REFRESH',
            state: {}
        })
    }, [dispatch])
}
