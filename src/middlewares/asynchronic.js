export const asynchronic = () => (next) => (action) => {
  next(action);
};
