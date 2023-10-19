module.exports = async (req, res, next) => {
  await new Promise((res) => setTimeout(() => res(), 1000));
  next();
};
