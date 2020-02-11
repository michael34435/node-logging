const log = require('loglevel');
const dayjs = require('dayjs');
const prefix = require('loglevel-plugin-prefix');

module.exports = (loggerName) => {
  prefix.reg(log);
  log.enableAll();

  prefix.apply(log, {
    format(level, name) {
      return `${dayjs().format('YYYY-MM-DD HH:mm:ss')} [${name}] ${level.toUpperCase()}:`;
    },
  });

  return log.getLogger(loggerName);
};
