import chalk from 'chalk';

const _debug = (...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.debug(...args);
  }

  return args[0];
};

const debug = Object.assign(_debug, {
  error: (...args) => _debug(chalk.red(`✗ ${args[0]}`), ...args.slice(1)),
  info: (...args) => _debug(chalk.blue(`• ${args[0]}`), ...args.slice(1)),
  success: (...args) => _debug(chalk.green(`✓ ${args[0]}`), ...args.slice(1)),
  warn: (...args) => _debug(chalk.yellow(`⚠ ${args[0]}`), ...args.slice(1)),
});

module.exports = { debug };
