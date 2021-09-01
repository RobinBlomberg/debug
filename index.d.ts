export const debug: {
  <T>(...args: [T, ...unknown[]]): T;
  error<T>(...args: [T, ...unknown[]]): T;
  info<T>(...args: [T, ...unknown[]]): T;
  success<T>(...args: [T, ...unknown[]]): T;
  warn<T>(...args: [T, ...unknown[]]): T;
};
