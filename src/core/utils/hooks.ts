/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/13
 */

import * as React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
// import isEqual from 'lodash/isEqual';

export function useSafeSetState<T>(
    initialState?: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [state, setState] = useState(initialState);

    const mountedRef = useRef(false);
    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);
    const safeSetState = useCallback(
        args => {
            if (mountedRef.current) {
                return setState(args);
            }
        },
        [mountedRef, setState]
    );

    // @ts-ignore
    return [state, safeSetState];
}
