
/**
 * 전역 스크립트를 최초 로딩하여 초기화하고, 이미 존재한다면 가져옴.
 * 
 * @param {string} name 스크립트 전역 변수명
 * @param {string} src 스크립트 URL
 * @param {function} onInit 스크립트 초기화 콜백
 */
async function loadGlobalScript(name, src, onInit) {
  const scriptId = 'script' + name;
  const scriptEl = document.getElementById(scriptId);

  if (!scriptEl) {
    return new Promise((resolve, reject) => {
      const el = document.createElement('script');

      el.id = scriptId;
      el.src = src;
      el.onload = function () {
        const instance = window[name];

        if (!instance) {
          reject(new Error('error.scriptNotLoaded'));
        }

        if (onInit) {
          onInit(instance)
        }

        resolve(instance);
      };

      document.body.append(el);
    });
  } else {
    return window[name];
  }
}

export default loadGlobalScript;
