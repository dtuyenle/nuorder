const memoize = fn => {
  let cache = {};
  return async (args) => {
    if (Object.keys(cache).length > 100) {
      delete cache[Object.keys(cache)[0]];
    }
    const stringifiedArgs = JSON.stringify(args);
    const result = cache[stringifiedArgs] || await fn(args);
    cache[stringifiedArgs] = result;
    return result;
  };
};

export { memoize };
