import { useCart } from "./cart-context";
import { useAlert } from "react-alert";
import axios from "axios";

function useCartServerCalls() {
  const token = localStorage.getItem("ecommToken");
  const { cartState, cartDispatch } = useCart();
  const alert = useAlert();

  const getCart = async () => {
    if (token) {
      try {
        const response = await axios.get("/api/user/cart", {
          headers: { authorization: token },
        });
        if (response.status === 200 && response.data.cart.length !== 0) {
          cartDispatch({
            type: "ADD-TO-CART",
            payload: response.data.cart,
          });
        }
      } catch (error) {
        alert.show("Internal Server Error", { type: "error" });
      }
    }
  }

  const addToCart = async (product, setIsLoading) => {
    try {
      setIsLoading(true);
      if (cartState.items.find((item) => item._id === product._id)) {
        alert.show("Already In Cart", { type: "info" });
      } else {
        const response = await axios.post(
          "/api/user/cart",
          { product },
          {
            headers: { authorization: token },
          }
        );
        cartDispatch({
          type: "ADD-TO-CART",
          payload: response.data.cart,
        });
        alert.show("Added To Cart", { type: "success" });
      }
    } catch (err) {
      alert.show("Error: Can't add to Cart", { type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: token },
      });
      cartDispatch({
        type: "REMOVE-FROM-CART",
        payload: response.data.cart,
      });
      alert.show("Remove from Cart", { type: "success" });
    } catch (err) {
      alert.show("Error: Can't remove from Cart", { type: "error" });
    }
  };

  const increaseQuantity = async (productId, setIsLoading) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: "increment" } },
        { headers: { authorization: token } }
      );
      cartDispatch({
        type: "INCREMENT-DECREMENT",
        payload: response.data.cart,
      });
    } catch (err) {
      alert.show("Error: Can't increase quantity!", { type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const decreaseQuantity = async (productId, setIsLoading) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: "decrement" } },
        { headers: { authorization: token } }
      );
      cartDispatch({
        type: "INCREMENT-DECREMENT",
        payload: response.data.cart,
      });
    } catch (err) {
      alert.show("Error: Can't decrease quantity!", { type: "error" });
    } finally {
      setIsLoading(false);
    }
  };
  return { getCart, addToCart, deleteFromCart, increaseQuantity, decreaseQuantity };
}

export { useCartServerCalls };
