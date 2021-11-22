const chalk = require('chalk');
const { inspect } = require('util');

/**
 * @param {...unknown} values
 */
const _debug = (...values) => {
  if (process.env.NODE_ENV !== 'production') {
    console.debug(...values);
  }

  return values[0];
};

/**
 * @param {unknown[]} values
 */
const _inspect = (values) => {
  return values.map((value) => {
    return value instanceof Object
      ? inspect(value, { colors: true })
      : value;
  }).join(' ');
};

const debug = Object.assign(_debug, {
  /**
   * @param {...unknown} values
   */
  error: (...values) => {
    return _debug(chalk.red(`✗ ${_inspect(values)}`))
  },
  /**
   * @param {...unknown} values
   */
  info: (...values) => {
    return _debug(chalk.blue(`• ${_inspect(values)}`))
  },
  /**
   * @param {...unknown} values
   */
  success: (...values) => {
    return _debug(chalk.green(`✓ ${_inspect(values)}`))
  },
  /**
   * @param {...unknown} values
   */
  warn: (...values) => {
    return _debug(chalk.yellow(`⚠ ${_inspect(values)}`))
  },
});

module.exports = { debug };
