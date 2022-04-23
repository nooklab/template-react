/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/09/22
 */

import UrlParse from 'url-parse'
import _ from 'lodash'


const resourceBasePath = process.env.REACT_APP_RESOURCE_BASE_PATH

export const ResourceUrlField = props => {
    const {record, source, text, className} = props;
    const path = _.get(record, source)
    let showText = ''
    let url = ''
    if (path) {
        url = `${resourceBasePath}${path}`
        let parsed = new UrlParse(url);
        showText = text ? text : parsed.pathname
    }
    return <>
        {url ? <a href={url} target="_blank" rel="noopener"
           className={"btn btn-sm btn-outline-primary " + className}
           tabIndex="-1" role="button">{showText}</a> : '-'}
    </>
}
