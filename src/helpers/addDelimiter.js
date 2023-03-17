export const addDelimiter = number => {
  return (number / 1000).toFixed(3).replace('.', ',');
};
