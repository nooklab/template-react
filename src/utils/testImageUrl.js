
/**
 * 이미지 주소를 통해 실재하는 이미지 인지 확인한다.
 * 
 * @param {string} url 이미지 주소
 * @param {number} timeout 이미지 로딩 실패로 간주할 최대 대기 시간(ms)
 * @param {number} failWidth 로딩 실패로 간주할 이미지 가로 크기
 * @returns {boolean} 실재하면 true, 아니면 false를 반환
 */
export default function testImageUrl(url, timeout = 3000, failWidth = 0) {
  return new Promise(function (resolve) {
    const img = new Image();
    const timer = setTimeout(function () {
      img.src = '';
      resolve(false);
    }, timeout);

    img.onerror = img.onabort = function () {
      clearTimeout(timer);
      resolve(false);
    };
    img.onload = function (e) {
      clearTimeout(timer);
      resolve(img.width !== failWidth);
    };
    img.src = url;
  });
}
