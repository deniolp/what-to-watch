const snakeToCamel = (word) => word.replace(/(_\w)/g, (matches) => matches[1].toUpperCase());

const normalizeKeys = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map((item) => normalizeKeys(item));
  }

  if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((acc, key) => Object.assign(acc, {
      [snakeToCamel(key)]: normalizeKeys(obj[key]),
    }), {});
  }

  return obj;
};

const changeFilm = (films, newFilm) => {
  return films.map((item) => {
    return item.id === newFilm.id ? newFilm : item;
  });
};

export {normalizeKeys, changeFilm};