export const wishlistFun = (wishlistState, action) => {
  switch (action.type) {
    case "ADD-TO-WISHLIST":
      return {
        ...wishlistState,
        quantity: action.payload.length,
        items: [...action.payload],
      };
    case "REMOVE-FROM-WISHLIST":
      return {
        ...wishlistState,
        quantity: action.payload.length,
        items: [...action.payload],
      };
    default:
      return wishlistState;
  }
};
