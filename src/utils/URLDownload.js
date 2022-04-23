/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/07/11
 */


/**
 * 지정 URL 을 파일로 다운로드 한다
 * @param destURL
 * @param filename 저장할 file 명
 */
export function downloadURL(destURL, filename) {
    fetch(destURL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/pdf',
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                filename,
            );

            // Append to html link element page
            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);
        });
}


