/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/11
 */
import axios from 'axios';
import {simpleQuery} from "../providers";


export const UploadResourceType = {
    UserProfileThumb : 'user_profile_thumb',
    CampaignImage : 'campaign_image',
    CampaignDetailImage : 'campaign_detail_image',
    CaptureImage : 'capture_image',
    DefaultImages : 'default_images'
}


/**
 * File 을 S3 에 업로드한다
 * @param file
 * @param uid
 * @param resourceType
 * @returns {Promise<*>}
 * @constructor
 */
export async function PreSignedFileUpload(file, resourceType) {
    const query = {
        uid: null,
        type: resourceType
    };
    const res = await simpleQuery('file', '/signed-url', query,true)
    const {error, data} = res
    // const {URL, URLKey} = data
    const preSignedUrl = data.URL
    const urlKey = data.URLKey
    const options = {
        headers: {
            'Content-Type': file.type
        }
    }
    await axios.put(preSignedUrl, file, options);
    return urlKey
}


/**
 * 이미지 목록을 타입에 따라서 리소스 업로드 한다
 * @param uid
 * @param imageList
 * @returns {Promise<*[]>}
 */
export async function mapImageToPreSignedURL(imageList) {
    const images = []
    for (const image of imageList) {
        const file = image.rawFile
        if (file) {
            // 파일이 있으면 로컬 파일이다
            const url = await PreSignedFileUpload(file, UploadResourceType.CampaignImage)
            if (url) {
                // images.push(url)
                images.push({
                    src: url
                })
            }
        } else {
            // 파일이 없으면 URL 이다
            images.push(image)
        }
    }
    return images
}
