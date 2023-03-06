export function sortFun(state, products) {
  const sortedProducts = products.sort(
    (a, b) => Number(a["price"]) - Number(b["price"])
  );
  if (state.sorting === "low") return sortedProducts;
  if (state.sorting === "high") return sortedProducts.reverse();
  return products;
}

export function stockFun(state, products) {
  return state.inStock
    ? products.filter((product) => product.inStock)
    : products;
}

export function fastDeliveryFun(state, products) {
  return state.isFastDelivery
    ? products.filter((product) => product.isFastDelivery)
    : products;
}

export function ratingFun(state, products) {
  return products.filter(
    (product) => Number(product.rating) >= Number(state.rating)
  );
}

export function priceRangeFun(state, products) {
  return products.filter(
    (product) => Number(product.price) <= Number(state.priceRange)
  );
}

export function categoryFun(state, products) {
  return state["categories"].length === 0
    ? products
    : products.filter((product) =>
        state["categories"].includes(product.categoryName)
      );
}
