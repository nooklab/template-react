import React, {useReducer} from 'react';
import Routes from './Routes';
import {AuthContext} from '@core/auth'
import {AuthProvider, DataProvider} from "./providers";
import {createStore, combineReducers} from "redux";
import {Provider} from 'react-redux';
import DataProviderContext from "@core/data/DataProviderContext";
import {ResourceContext, ResourceDispatchContext} from "@core/ResourceContext";
import {AlertContainer} from '@components/Alert'
import {ErrorBoundary} from "@components/CatchError";
import GlobalErrorHandler from "@components/GlobalErrorHandler";
import {ToastContainerEx} from "@components/Toast/ToastItem";
import {StateProvider} from "./state/StateContext";

const AppReducer = combineReducers({
    // app: appSubReducers
    // app:
})

const store = createStore(
    AppReducer
);

function reducer(state, action) {
    switch (action.type) {
        case 'LOAD_DONE':
            state = {
                ...state,
                ...action.state,
            }
            break
    }
    return state
}

function resourceReducer(state, action) {
    let newState = state;
    switch (action.type) {
        case 'LIST_REFRESH': {
            const refresh = state.refresh ? state.refresh + 1 : 1;
            newState = {
                ...state,
                refresh,
            }
            break;
        }
    }
    return newState
}

const initialState = {
    questionRef: null
}

function App() {
    // const [state, dispatch] = useReducer(reducer, {
    //     loading: true,
    // });

    const [resourceState, resourceDispatch] = useReducer(resourceReducer, {
        refresh: 0,
    });

    return (
        <div className="App">
            <StateProvider initialValue={initialState}>
                <Provider store={store}>
                    <AuthContext.Provider value={AuthProvider}>
                        <DataProviderContext.Provider value={DataProvider}>
                            <ResourceDispatchContext.Provider value={resourceDispatch}>
                                <ResourceContext.Provider value={resourceState}>
                                    {/*<CampaignDispatchContext.Provider value={dispatch}>*/}
                                    {/*    <CampaignContext.Provider value={state}>*/}
                                            <AlertContainer>
                                                <ErrorBoundary>
                                                    <Routes/>
                                                    <GlobalErrorHandler/>
                                                </ErrorBoundary>
                                            </AlertContainer>
                                            <ToastContainerEx/>
                                        {/*</CampaignContext.Provider>*/}
                                    {/*</CampaignDispatchContext.Provider>*/}
                                </ResourceContext.Provider>
                            </ResourceDispatchContext.Provider>
                        </DataProviderContext.Provider>
                    </AuthContext.Provider>
                </Provider>
            </StateProvider>
        </div>
    );
}

export default App;
