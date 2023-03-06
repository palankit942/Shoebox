export const getFilteredProducts =
  (...functions) =>
  (state, products) =>
    functions.reduce((prev, curr) => curr(state, prev), products);
