/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/08/14
 */
import {getAuthIdentity} from "./AuthProvider";
import {paramCase} from "param-case";
import {stringify} from 'query-string';
import axios from 'axios'
import throttleAdapterEnhancer from "../utils/cacheAdapter/cacheAdapter";
// import { cacheAdapterEnhancer, throttleAdapterEnhancer } from 'axios-extensions';

const apiUrl = process.env.REACT_APP_SERVER_URI

const axiosInstance = axios.create({
    baseURL: '/',
    headers: { 'Cache-Control': 'no-cache' },
    // cache will be enabled by default
    // adapter: cacheAdapterEnhancer(axios.defaults.adapter, { enabledByDefault: false }),
    // cache disabled
    // adapter: cacheAdapterEnhancer(axios.defaults.adapter, { enabledByDefault: false }),
    // cache timer throttle (cache valid until 10s)
    adapter: throttleAdapterEnhancer(axios.defaults.adapter, { threshold: 10 * 1000 })
})

function httpRequest(url, options = {}, cache = false) {
    return new Promise((resolve, reject) => {
        getAuthIdentity().then(identity => {
            // if (!identity) {
            //     return resolve({
            //         error: 'invalid identity'
            //     })
            // }
            // const user = JSON.parse(data)
            const token = identity ? identity.token : ''
            options.headers = {
                Authorization: `Bearer ${token}`,
            };
            options.cache = cache
            axiosInstance(url, options).then(res => {
                const {data, headers, config} = res
                return resolve({
                    error: data.error,
                    data: data.data,
                    headers,
                    config
                })
            }).catch(err => {
                return reject(err)
            })
        })
    })
}

function HttpError() {

}

function returnJsonHttpError(json) {
    // return new HttpError(
    //     json.devErrorLog.msg,
    //     200,
    //     json.error,
    // )
}

function getRangeByPagination(pagination) {
    const {page, perPage} = pagination;
    return [(page - 1) * perPage, perPage]
}

export const DataProvider = {

    getList: async (resource, params) => {

        // if (params.filter.q) {
        //     // fix search field filter
        //     const text = params.filter.q
        //     params.filter.q = {
        //         fields: SearchField[resource],
        //         search: text
        //     }
        // }

        const {sort = {}, filter, pagination = {page: 1, perPage: 20}, cache} = params

        const {field, order} = sort;
        const resourceParam = paramCase(resource)
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify(getRangeByPagination(pagination)),
            filter: JSON.stringify(filter),
        };
        const url = `${apiUrl}/${resourceParam}?${stringify(query)}`;

        // return httpRequest(url).then(({headers, json}) => {
        // return httpRequest(url, {}, cache).then(({error, status, data, headers}) => {
        //     if (error) {
        //         // something wrong
        //         return {
        //             data: [],
        //             total: 0,
        //         }
        //     }
        //     let list = data.list
        //     return {
        //         data: list,
        //         // total: parseInt(headers.get('content-range').split('/').pop(), 10),
        //         total: data.total,
        //     }
        // });
        const {error, status, data, headers} = await httpRequest(url, {}, cache)
        if (error) {
            // something wrong
            return {
                data: [],
                total: 0,
            }
        }
        let list = data.list
        return {
            data: list,
            // total: parseInt(headers.get('content-range').split('/').pop(), 10),
            total: data.total,
        }
    },
    getOne: async (resource, params) => {
        const {id, cache} = params
        // return httpRequest(`${apiUrl}/${resource}/${id}`, {}, cache).then(({error, status, data, headers}) => {
        //     if (error) {
        //         // something wrong
        //         return null;
        //     }
        //     return {
        //         ...data,
        //     }
        // })
        const {error, status, data, headers} = await httpRequest(`${apiUrl}/${resource}/${id}`, {}, cache)
        if (error) {
            // something wrong
            return null;
        }
        return {
            ...data,
        }
    },
    getMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        // return httpRequest(url).then(({error, status, data, headers}) => {
        //     if (error) {
        //         return {
        //             data: []
        //         }
        //     }
        //     let list = data.list
        //     return {
        //         data: list
        //     }
        // });
        const {error, status, data, headers} = await httpRequest(url)
        if (error) {
            return {
                data: []
            }
        }
        let list = data.list
        return {
            data: list
        }
    },
    getManyReference: async (resource, params) => {
        // const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify(getRangeByPagination(params.pagination)),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        // return httpRequest(url).then(({headers, json}) => {
        //     if (json.error) {
        //         return {
        //             data: [],
        //             total: 0,
        //         }
        //     }
        //     return {
        //         data: json.data.list,
        //         // total: parseInt(headers.get('content-range').split('/').pop(), 10),
        //         total: json.data.total,
        //     }
        // });
        const {headers, json} = await httpRequest(url)
        if (json.error) {
            return {
                data: [],
                total: 0,
            }
        }
        return {
            data: json.data.list,
            // total: parseInt(headers.get('content-range').split('/').pop(), 10),
            total: json.data.total,
        }
    },
    update: async (resource, params) => {
        // return httpRequest(`${apiUrl}/${resource}/${params.id}`, {
        //     method: 'PUT',
        //     // body: JSON.stringify(params.data),
        //     data: params.data,
        // }).then(({status, data, error, headers}) => {
        //     if (error) {
        //         return returnJsonHttpError(error)
        //     }
        //     return {
        //         data,
        //     }
        // })
        const {status, data, error, headers} = await httpRequest(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            // body: JSON.stringify(params.data),
            data: params.data,
        })
        if (error) {
            return returnJsonHttpError(error)
        }
        return {
            data,
        }
    },

    updateMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        // return httpRequest(`${apiUrl}/${resource}?${stringify(query)}`, {
        //     method: 'PUT',
        //     body: JSON.stringify(params.data),
        // }).then(({error, status, data, headers}) => ({data}));
        const {error, status, data, headers} = await httpRequest(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        })
        return {
            data
        }
    },

    create: async (resource, params) => {
        // return new Promise((resolve, reject) => {
        //     httpRequest(`${apiUrl}/${resource}`, {
        //         method: 'POST',
        //         data: params.data,
        //     }).then(({error, status, data, headers}) => {
        //         if (error) {
        //             const {code, msg} = error
        //             // // fixme: 나중에 에러 정리 필요
        //             // return reject(new HttpError(
        //             //     // devErrorLog.msg,
        //             //     msg,
        //             //     200,
        //             //     ''
        //             // ))
        //             return resolve({
        //                 error
        //             })
        //         }
        //         return resolve({
        //             data: {
        //                 ...params.data,
        //                 id: data.id
        //             }
        //         })
        //     })
        // })
        const {error, status, data, headers} = await httpRequest(`${apiUrl}/${resource}`, {
            method: 'POST',
            data: params.data,
        })
        if (error) {
            const {code, msg} = error
            // // fixme: 나중에 에러 정리 필요
            // return reject(new HttpError(
            //     // devErrorLog.msg,
            //     msg,
            //     200,
            //     ''
            // ))
            throw new Error('create fail')
            // return resolve({
            //     error
            // })
        }
        return {
            data: {
                ...params.data,
                id: data.id
            }
        }
    },

    delete: async (resource, params) => {
        // return httpRequest(`${apiUrl}/${resource}/${params.id}`, {
        //     method: 'DELETE',
        // }).then(({error, status, data, headers}) => {
        //     if (error) {
        //
        //     }
        //     // const {result, data} = json.data
        //     //{ data: {Record} } The record that has been deleted
        //     return {
        //         data: {}
        //     }
        // })
        const {error, status, data, headers} = await httpRequest(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        })
        if (error) {

        }
        // const {result, data} = json.data
        //{ data: {Record} } The record that has been deleted
        return {
            data: {}
        }
    },


    deleteMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ids: params.ids}),
        };
        // return httpRequest(`${apiUrl}/${resource}?${stringify(query)}`, {
        //     method: 'DELETE',
        // }).then(({error, status, data, headers}) => {
        //     // { data: {mixed[]} } The ids of the deleted records (optional)
        //     // const {result, data} = json.data
        //     if (error) {
        //
        //     }
        //     return {data}
        // })
        const {error, status, data, headers} = await httpRequest(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
        })
        // { data: {mixed[]} } The ids of the deleted records (optional)
        // const {result, data} = json.data
        if (error) {

        }
        return {data}
    }
}



export async function simpleQuery(resource, extraPath = '', query, rawResult = false) {
    const url = `${apiUrl}/${resource}${extraPath}?${stringify(query)}`;
    const options = {}
    // return httpRequest(url, options).then((result) => {
    //     const {error, status, data, headers} = result
    //     // const {json} = result
    //     if (rawResult) {
    //         return result
    //     }
    //     // if (json.error) {
    //     //     // something wrong
    //     //     return {
    //     //         data: [],
    //     //         total: 0,
    //     //     }
    //     // }
    //     // let list = json.data.list
    //     return {
    //         data: data.list,
    //         // total: parseInt(headers.get('content-range').split('/').pop(), 10),
    //         total: data.total,
    //     }
    // })
    const result = await httpRequest(url, options)
    const {error, status, data, headers} = result
    // const {json} = result
    if (rawResult) {
        return result
    }
    // if (json.error) {
    //     // something wrong
    //     return {
    //         data: [],
    //         total: 0,
    //     }
    // }
    // let list = json.data.list
    return {
        data: data.list,
        // total: parseInt(headers.get('content-range').split('/').pop(), 10),
        total: data.total,
    }
}


export async function updateQuery(api, data) {
    const url = `${apiUrl}/${api}`
    const result = await httpRequest(url, {
        method: 'PUT',
        // body: JSON.stringify(data),
        data: data,
    })
    const {error} = result
    if (error) {
        return returnJsonHttpError({error})
    }
    return {
        data: result.data,
    }
}

export async function postQuery(api, data) {
    const url = `${apiUrl}/${api}`
    const result = await httpRequest(url, {
        method: 'POST',
        data: data,
    })
    const {error} = result
    if (error) {
        return returnJsonHttpError({error})
    }
    return {
        data: result.data,
    }
}



export async function getReferenceRecordAndMap(props) {
    const {list, reference, source, target} = props
    const ids = list.map(item => item[source])
    const result = await DataProvider.getMany(reference, {
        ids,
    })
    for (const item of list) {
        // const found = result.data.find(item => item.id === item[source])
        const found = result.data.find(dataItem => {
            return dataItem.id === item[source]
        })
        if (found) {
            item[target] = found
        }
    }
    return list
}
