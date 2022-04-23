/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/17
 */


/**
 * dataProvider list 의 결과 이다
 */
export interface DataProviderList {
    // 결과 항목 갯수
    total : number
    // 결과 항목 배열
    data: any[]
}


export interface DataProviderParam {
    sort: {
        field: string
        order: string
    },
    filter: any
    pagination: {
        page: number
        perPage: number
    }
    cache: boolean
}
