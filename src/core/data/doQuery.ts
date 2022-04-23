/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/08/14
 */



export const doQuery = (props) => {
    const {
        type,
        payload,
        resource,
        action,
        rest,
        onSuccess,
        onFailure,
        dataProvider,
        dispatch,
        logoutIfAccessDenied,
        allArguments,
    } = props
    // dispatch({ type: FETCH_START });
    try {
        return dataProvider[type]
            .apply(
                dataProvider,
                typeof resource !== 'undefined'
                    ? [resource, payload]
                    : allArguments
            )
            .then(response => {
                // if (process.env.NODE_ENV !== 'production') {
                //     validateResponseFormat(response, type);
                // }
                // dispatch({
                //     type: `${action}_SUCCESS`,
                //     payload: response,
                //     requestPayload: payload,
                //     meta: {
                //         ...rest,
                //         resource,
                //         fetchResponse: getFetchType(type),
                //         fetchStatus: FETCH_END,
                //     },
                // });
                // dispatch({ type: FETCH_END });
                onSuccess && onSuccess(response);
                return response;
            })
            .catch(error => {
                if (process.env.NODE_ENV !== 'production') {
                    console.error(error);
                }
                return logoutIfAccessDenied(error).then(loggedOut => {
                    if (loggedOut) return;
                    // dispatch({
                    //     type: `${action}_FAILURE`,
                    //     error: error.message ? error.message : error,
                    //     payload: error.body ? error.body : null,
                    //     requestPayload: payload,
                    //     meta: {
                    //         ...rest,
                    //         resource,
                    //         fetchResponse: getFetchType(type),
                    //         fetchStatus: FETCH_ERROR,
                    //     },
                    // });
                    // dispatch({ type: FETCH_ERROR, error });
                    onFailure && onFailure(error);
                    throw error;
                });
            });
    } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(e);
        }
        throw new Error(
            'The dataProvider threw an error. It should return a rejected Promise instead.'
        );
    }
}
