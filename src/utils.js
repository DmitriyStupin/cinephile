export const getRandomInteger = (items) => {
  const randomInteger = Math.floor(Math.random() * (items.length - 1));
  const result = items[randomInteger];
  return result;
};
