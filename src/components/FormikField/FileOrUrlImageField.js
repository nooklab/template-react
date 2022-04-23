/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/08/14
 */

import _ from 'lodash'
import AspectRatioImage from "@components/AspectRatioImage";
import React from "react";

const resourceBasePath = process.env.REACT_APP_RESOURCE_BASE_PATH


export const FileOrUrlImageField = (props) => {
    const { source, record } = props;
    const image = _.get(record, source)
    let url
    if (record.rawFile) {
        // 로컬 파일
        url = image
    } else {
        url = `${resourceBasePath}${image}`
    }
    return (
        <div className="formik-image-input-thumb d-flex justify-content-center align-items-center">
            <AspectRatioImage src={url} ratio={1} />
        </div>
    )
}
