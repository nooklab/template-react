/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/18
 */
import {CAMPAIGN_RESULT_STATE, CAMPAIGN_RESULT_STATE_TEXT} from "@interfaces/result.interface";


export const RANK_TYPES = [{
    id: 'KEYWORD_NAVER_PC_VIEW',
    type: 'KEYWORD_NAVER_PC_VIEW',
    name: 'VIEW탭 PC',
}, {
    id: 'KEYWORD_NAVER_MOBILE_VIEW',
    type: 'KEYWORD_NAVER_MOBILE_VIEW',
    name: 'VIEW탭 Mobile',
}, {
    id: 'KEYWORD_NAVER_MOBILE_INFLUENCER',
    type: 'KEYWORD_NAVER_MOBILE_INFLUENCER',
    name: '인플루언서탭 Mobile',
}]



export function getCampaignResultStateText(state: CAMPAIGN_RESULT_STATE) {
    return CAMPAIGN_RESULT_STATE_TEXT[state]
}




//////////////////////////////////////////////////////////////////////

export const OUT_OF_RANK = 99
export const GRAPH_OUT_OF_RANK = 15

interface DatedRankTypedItem {
    rank: number
    URL: string
}

export interface DatedRankItem {
    date: string
    keyword: string
    KEYWORD_NAVER_PC_VIEW?: DatedRankTypedItem
    KEYWORD_NAVER_MOBILE_VIEW?: DatedRankTypedItem
    KEYWORD_NAVER_MOBILE_INFLUENCER?: DatedRankTypedItem
}



// share 에 정의되어 있다. 동기화 반드시 필요
export enum SCRAP_DATA_ID {
    NONE = "0",
    KEYWORD_CONTENT_AMOUNT = "KCA",
}

export interface ㅊ {
    type: SCRAP_DATA_ID
    date: string
    keyword: string
    content: number
}


export interface SCRAP_RESULT_ITEM {
    keyword: string
    date: string
}
