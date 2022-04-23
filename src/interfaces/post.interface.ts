

/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/03/30
 */


import {RANK_TYPE} from "@interfaces/result.interface";


export interface PostResultItem {
    URL: string
    date: string
    keyword: string
    rank: number
    type: RANK_TYPE
}


export interface PostRankTypeInfo {
    id: string
    type: string
    name: string
}


export interface PackedPostItem {
    keyword: string
    state: {
        success: number
        done: number
    }
    userChannelId: string
}

export interface PackedPost {
    contentId: string
    channel: string
    url: string
    info: any
    keywords: string[]
    group: PackedPostItem[]
}
