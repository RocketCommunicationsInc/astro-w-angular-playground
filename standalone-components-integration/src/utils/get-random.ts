export const getRandom = (min = 1, max = 100) => {
  return Math.floor(Math.random() * (max - min) + min);
};
