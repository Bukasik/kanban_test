import humps from 'humps';

export const camelize = obj =>
  humps.camelizeKeys(obj, (key, convert) => {
    const result = convert(key);
    return /^__.*$/.test(key) ? `__${result}` : result;
  });
export const decamelize = obj => humps.decamelizeKeys(obj);