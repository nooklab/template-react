/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/19
 */


/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2018-03-19
 */

export default function isCacheLike(cache: any) {
    return !!(cache.set && cache.get && cache.del &&
        typeof cache.get === 'function' && typeof cache.set === 'function' && typeof cache.del === 'function');
}
