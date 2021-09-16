export const debug: {
  <T>(...values: [T, ...unknown[]]): T;
  error<T>(...values: [T, ...unknown[]]): T;
  info<T>(...values: [T, ...unknown[]]): T;
  success<T>(...values: [T, ...unknown[]]): T;
  warn<T>(...values: [T, ...unknown[]]): T;
};
