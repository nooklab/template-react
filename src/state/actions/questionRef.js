/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/11/07
 */


import {STATE_ACTION} from "./action";

export function QuestionRefAction(state, action) {
    switch (action.type) {
        case STATE_ACTION.QUESTION_REF:
            return {
                ...state,
                questionRef: action.state.questionRef,
            }
    }
    return null
}
