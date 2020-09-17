const ids = {};

export default (prefix = 'uuid_') => {
  ids[prefix] = ids[prefix] || 0;

  const id = `${prefix}${ids[prefix]}`;

  ids[prefix]++;

  return id;
};
