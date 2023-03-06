import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext/cart-context";
import "../pages/cart/cart.css";

function BillingDetail() {
  const navigate = useNavigate();
  const { cartState } = useCart();
  const [price, setPrice] = useState({
    totalPrice: 0,
    deliveryCharge: 40,
    prodPrice: 0,
  });

  useEffect(() => {
    if (cartState.items.length !== 0) {
      const priceSum = cartState.items.reduce(
        (prev, curr) => prev + Number(curr.price) * Number(curr.qty),
        0
      );
      setPrice((val) => ({
        ...val,
        totalPrice: priceSum + val.deliveryCharge,
        prodPrice: priceSum,
      }));
    } else {
      setPrice((val) => ({ ...val, totalPrice: 0, prodPrice: 0 }));
    }
  }, [cartState]);

  return (
    <div className="bill-container p-4 border-2 mx-auto">
      <h4>Price Details</h4>
      <span className="gray-hr-line"></span>
      <div className="price-info">
        <p>Price</p>
        <p>Rs. {price.prodPrice}</p>
      </div>
      <div className="price-info">
        <p>Delivery Charges</p>
        <p>Rs. {price.deliveryCharge}</p>
      </div>
      <span className="gray-hr-line"></span>
      <div className="price-info">
        <h4>Total Price</h4>
        <h4>Rs. {price.totalPrice}</h4>
      </div>
      <span className="gray-hr-line"></span>
      <button className="btn btn-primary" onClick={() => navigate("/checkout")}>
        Checkout
      </button>
    </div>
  );
}

export { BillingDetail };
