import React from "react";
import { BillingDetail } from "../../components/BillingDetail";
import { CartCard } from "../../components/CartCard";
import { Empty } from "../../components/Empty";
import { useCart } from "../../context/cartContext/cart-context.js";
import "./cart.css";

function Cart() {
  const { cartState } = useCart();

  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <div>
        {cartState.quantity === 0 ? (
          <Empty emptyText="Cart" />
        ) : (
          <div className="cart-component flex flex-col gap-y-8 my-8">
            <BillingDetail />
            <CartCard />
          </div>
        )}
      </div>
    </div>
  );
}

export { Cart };
