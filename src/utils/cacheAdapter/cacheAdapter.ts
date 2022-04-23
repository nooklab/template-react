/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/19
 * Re-coded from Kuitos -  https://github.com/kuitos/
 */


import { AxiosAdapter, AxiosPromise, AxiosRequestConfig } from 'axios';
import LRUCache from 'lru-cache';
// import { ICacheLike } from './cacheAdapterEnhancer';
import buildSortedURL from './buildSortedURL';


export interface ICacheLike<T> {
    get(key: string): T | undefined;
    set(key: string, value: T, maxAge?: number): boolean;
    del(key: string): void;
}


export type RecordedCache = {
    timestamp: number;
    value?: AxiosPromise;
};

export type Options = {
    threshold?: number,
    cache?: ICacheLike<RecordedCache>,
};

export default function throttleAdapterEnhancer(adapter: AxiosAdapter, options: Options = {}): AxiosAdapter {

    const { threshold = 1000, cache = new LRUCache<string, RecordedCache>({ max: 10 }) } = options;

    const recordCacheWithRequest = (index: string, config: AxiosRequestConfig) => {

        const responsePromise = (async () => {

            try {

                const response = await adapter(config);

                cache.set(index, {
                    timestamp: Date.now(),
                    value: Promise.resolve(response),
                });

                return response;
            } catch (reason) {
                cache.del(index);
                throw reason;
            }

        })();

        cache.set(index, {
            timestamp: Date.now(),
            value: responsePromise,
        });

        return responsePromise;
    };

    return config => {

        const { url, method, params, paramsSerializer } = config;

        const index = buildSortedURL(url, params, paramsSerializer);

        const now = Date.now();
        const cachedRecord = cache.get(index) || { timestamp: now };

        if (method === 'get') {

            const cache = config['cache']
            if (now - cachedRecord.timestamp <= threshold && cache) {

                const responsePromise = cachedRecord.value;
                if (responsePromise) {

                    /* istanbul ignore next */
                    if (process.env.LOGGER_LEVEL === 'info') {
                        // eslint-disable-next-line no-console
                        console.info(`[axios-extensions] request cached by throttle adapter --> url: ${index}`);
                    }

                    return responsePromise;
                }
            }

            return recordCacheWithRequest(index, config);
        }

        return adapter(config);
    };
}
