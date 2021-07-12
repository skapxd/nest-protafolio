const stringFilter = (string: string): string => {
  return string.replace(/[^A-Za-z0-9ñÑ@_\-+*%&.?¿¡ ]+/g, '');
};

export default stringFilter;
