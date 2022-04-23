import debug from 'debug';

const debugColors = {
  trace: 'lightblue',
  info: 'blue',
  warn: 'pink',
  error: 'red'
};

function createDebugInstance(level) {
  const instance = debug(`${process.env.REACT_APP_NAME}:${level}`);
  instance.color = debugColors[level];
  return instance;
}

const debugInstances = {
  trace: createDebugInstance('trace'),
  info: createDebugInstance('info'),
  warn: createDebugInstance('warn'),
  error: createDebugInstance('error')
};

class Logger {
  constructor() {
    if (process.env.REACT_APP_DEBUG_MODE === 'true') {
      debug.enable(`${process.env.REACT_APP_NAME}:*`);
    } else {
      debug.disable();
    }
  }

  generateMessage(level, message, ...args) {
    const instance = debugInstances[level];
    instance(message, ...args);
  }

  trace(message, ...args) {
    return this.generateMessage('trace', message, ...args);
  }

  info(message, ...args) {
    return this.generateMessage('info', message, ...args);
  }

  warn(message, ...args) {
    return this.generateMessage('warn', message, ...args);
  }

  error(message, ...args) {
    return this.generateMessage('error', message, ...args);
  }
}

export default new Logger();
