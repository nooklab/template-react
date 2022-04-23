
export default function debounce(cancelValue) {
  let timer = null;
  let cancel = null;

  return function (callback, duration = 200) {
    return new Promise((resolve) => {
      if (timer) {
        clearTimeout(timer);
        cancel();
      }

      timer = setTimeout(() => {
        const res = callback();

        if (res instanceof Promise) {
          res.then(resolve);
        } else {
          resolve(res);
        }

        timer = null;
        cancel = null;
      }, duration);

      cancel = function () {
        resolve(cancelValue);
      };
    });
  }
}
