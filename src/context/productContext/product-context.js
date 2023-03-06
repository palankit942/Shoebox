import { React, useReducer, createContext, useContext } from "react";
import { initialFilter } from "./initialFilter";
import { useInitialProducts } from "./useInitialProducts";
import { getFilteredProducts } from "./getFilteredProducts";
import {
  sortFun,
  fastDeliveryFun,
  ratingFun,
  categoryFun,
  stockFun,
  priceRangeFun,
} from "./filterFunctions";

const ProductContext = createContext();

const filterFunction = (state, action) => {
  switch (action.type) {
    case "LOW-TO-HIGH":
      return { ...state, sorting: action.payload };
    case "HIGH-TO-LOW":
      return { ...state, sorting: action.payload };
    case "IN-STOCK":
      return { ...state, inStock: !state.inStock };
    case "IS-FAST-DELIVERY":
      return { ...state, isFastDelivery: !state.isFastDelivery };
    case "RATING":
      return { ...state, rating: action.payload };
    case "PRICE-RANGE":
      return { ...state, priceRange: action.payload };
    case "CATEGORY":
      return {
        ...state,
        categories: state["categories"].includes(action.payload)
          ? state["categories"].filter(
              (category) => category !== action.payload
            )
          : state["categories"].concat(action.payload),
      };
    case "CLEAR":
      return initialFilter;
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterFunction, initialFilter);
  const { products } = useInitialProducts();

  const filteredProducts = getFilteredProducts(
    sortFun,
    ratingFun,
    categoryFun,
    priceRangeFun,
    stockFun,
    fastDeliveryFun
  )(state, [...products]);

  return (
    <ProductContext.Provider value={{ state, dispatch, filteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
