import getParameterNames from 'get-parameter-names';

export const wrapForLogging = (target, callback) => {
  const methods = Object.getOwnPropertyNames(target).filter((propName) => {
    return typeof target[propName] === 'function';
  });

  return methods.reduce((acc, method) => {
    acc[method] = async (...args) => {
      const values = {};
      getParameterNames(target[method]).forEach((k, index) => {
        values[k] = args[index];
      });
      const result = await target[method](...args);
      callback(method, values, result);
      return result;
    };
    return acc;
  }, {});
};

export default { wrapForLogging };
