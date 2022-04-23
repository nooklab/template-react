
export default class Timer {
  callback = null;
  duration = 0;
  handler = null;

  constructor(callback, duration = 5000) {
    this.callback = callback;
    this.duration = duration;
  }

  start() {
    this.stop();

    this.handler = setInterval(() => {
      this.callback();
    }, this.duration);
  }

  stop() {
    if (this.handler) {
      clearInterval(this.handler);
      this.handler = null;
    }
  }
}
