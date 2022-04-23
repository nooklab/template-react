/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/03/30
 */



export enum RANK_TYPE {
    KEYWORD_NAVER_PC_VIEW ='KEYWORD_NAVER_PC_VIEW',
    KEYWORD_NAVER_MOBILE_VIEW ='KEYWORD_NAVER_MOBILE_VIEW',
    KEYWORD_NAVER_MOBILE_INFLUENCER ='KEYWORD_NAVER_MOBILE_INFLUENCER',
}

export enum CAMPAIGN_RESULT_STATE {
    // 상태없슴
    NONE,
    // 포스팅 등록 후 7위 이내 진입 여부 확인 중인 상태 (순위 진입 전)
    PROGRESS,
    // 포스팅 등록 후 7위 이내 진입 시 보장기간 1일 전까지 상태(순위 모니터링 단계)
    // 순위 진입 후 7일 기간 동안 순위 크롤링
    RANK_PROGRESS,
    // 포스팅 등록 후 7위 이내 진입 시 ~ 상위노출 보장 기간 동안 순위 유지 완료 상태
    // 순위 크롤링 종료
    RANK_SUCCESS,
    // 포스팅 등록~9일 기간 동안 순위 진입이 없는 경우 10일차에 캠페인 종료 처리 (상위노출 실패)
    // 순위 크롤링 종료
    FINISHED
}

export const CAMPAIGN_RESULT_STATE_TEXT = {
    [CAMPAIGN_RESULT_STATE.NONE]: '없음',
    [CAMPAIGN_RESULT_STATE.PROGRESS]: '진행중',
    [CAMPAIGN_RESULT_STATE.RANK_PROGRESS]: '순위 확인중',
    [CAMPAIGN_RESULT_STATE.RANK_SUCCESS]: '상위노출 성공',
    [CAMPAIGN_RESULT_STATE.FINISHED]: '캠페인 종료',
}


export interface CampaignResultSummary {
    type: any
    // 랭크내 진입(first day) ~ last 까지 날짜수
    duration: {
        fromStart: number
        fromRank: number
    }
    first: {
        date: string
    }
    last: {
        date: string
    },
    success: number,    // 기간내 성공 횟수
    fail: number        // 기간내 실패 횟수
    state: CAMPAIGN_RESULT_STATE       // 캠페인 진행 상태
}
