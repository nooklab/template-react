/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/12
 */



type ListRange = [page: number, size: number]




export type ListQueryArgs = {
    range: ListRange
    filter: object
    sort: object
}

export type ListQueryResult = {
    total: number
    items: any[]
}


export function toOffsetLimit(query: ListRange) {
    return [(query[0] - 1) * query[1], query[1]]
}


