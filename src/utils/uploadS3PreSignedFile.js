import axios from 'axios';

/**
 *
 *
 *
 * *********************************************************************
 * 사용하지 않는다!!!!!!!
 * FileUpload 사용할것!
 * *************************************
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * S3 Presigned 파일 주소를 가져와서 파일을 업로드함.
 *
 * @param server
 * @param {string} uploadEndpoint S3 Presigned 파일 주소를 요청할 수 있는 엔드포인트
 * @param {File} file
 */
export default async function uploadS3PreSignedFile(server, file, resourceType) {
    const ext = file.name.split('.').pop();
    // const res = await server.get(uploadEndpoint + '?ext=' + ext);
    const res = await server.requester.GetPreSignedURL({
        input: {
            type: resourceType
        }
    })
    // TODO:
    // const presignedUrl = res.ms.result || res.data.endpoint;
    const preSignedUrl = res.preSignedURL.URL
    const urlKey = res.preSignedURL.URLKey
    // const urlKey = preSignedUrl.split('/').slice(4).join('/').split('?')[0];
    // const reader = new FileReader();
    // return new Promise((resolve, reject) => {
    //   reader.onload = e => {
    //     // headers: {
    //     //   'accept': 'application/json',
    //     //       'Accept-Language': 'en-US,en;q=0.8',
    //     //       'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    //     // }
    //     // const file = e.target.result
    //     const formData = new FormData();
    //     formData.append('Content-Type', file.type);
    //     formData.append('file', file);
    //     // axios.put(preSignedUrl, e.target.result, {
    //     axios.put(preSignedUrl, formData, {
    //       headers: {
    //         'Content-Type': 'image/png'
    //       }
    //     }).then(() => {
    //       resolve(urlKey);
    //     }).catch(err => {
    //       return reject(err)
    //     });
    //   };
    //   reader.readAsArrayBuffer(file);
    // });
    const options = {
        headers: {
            'Content-Type': file.type
        }
    }
    await axios.put(preSignedUrl, file, options);
    return urlKey
}
