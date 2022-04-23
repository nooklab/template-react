/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/11/07
 */


import {createContext, useContext, useReducer} from "react";
import {QuestionRefAction} from "./actions/questionRef";



export const StateContext = createContext({});



export const StateProvider = props => {
    const {initialValue, children} = props
    const [state, dispatch] = useReducer((state, action) => {

        const result = QuestionRefAction(state, action)
        if (result) {
            return result
        }

        switch (action.type) {
            case 'add':
                const newState = action.state
                return newState
            default:
                throw new Error('not defined action error')
        }
    }, initialValue)
    return <StateContext.Provider value={{state, dispatch}}>{children}</StateContext.Provider>
}

export const useStateContext = props => {
    const context = useContext(StateContext)
    const {state, dispatch} = context
    return {
        state,
        dispatch
    }
}
