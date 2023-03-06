import { React, useState, useEffect } from "react";
import { useCart } from "../context/cartContext/cart-context";
import "../pages/cart/cart.css";
import { useAlert } from "react-alert";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../context/orderContext/orderContext";

function CheckoutBill({ selectedAddress }) {
  const { cartState } = useCart();
  const alert = useAlert();
  const [price, setPrice] = useState({
    totalPrice: 0,
    deliveryCharge: 40,
    prodPrice: 0,
  });
  const navigate = useNavigate();
	const { dispatchOrder } = useOrder();

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

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    if (selectedAddress === undefined) {
      alert.show("Please Select or Add an Address", { type: "info" });
    } else {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert.show("Razorpay SDK failed to load, check your connection", {
          type: "error",
        });
        return;
      }

      const options = {
        key: "rzp_test_zU0Ln69INclft4",
        amount: price.totalPrice * 100,
        currency: "INR",
        name: "The Shoebox",
        description: "Thank you for shopping with us",
        handler: async function (response) {
					const orderId = uuid().toString().split("-")[0];

					const orderData = {
						products: cartState,
						amount: price.totalPrice,

						paymentId: response.razorpay_payment_id,
						orderId,
						delivery: selectedAddress,
					};
					dispatchOrder({ type: "GET_ORDERS", payload: orderData });
					navigate(`/order/${orderId}`);
				},
				prefill: {
					name: "Varun Verma",
					email: "varun@gmail.com",
					contact: "8877573687",
				},
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

  return (
    <div className="bill-container p-4 border-2 mx-auto">
      <h4>Order Summary</h4>
      <span className="gray-hr-line"></span>
      <div className="w-100p">
        {cartState.items.length !== 0 &&
          cartState.items.map((item) => (
            <div key={item._id} className="mb-4 cart-item-wrapper">
              <p className="font-semibold">{item.brand}</p>
              <p className="text-base">{item.title}</p>
              <p className="font-md"><span className="gray-text">Price:</span> {item.price} (Qty: {item.qty})</p>
            </div>
          ))}
      </div>
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
      {selectedAddress && (
        <div>
          <p className="gray-text mb-2">Deliver To:</p>
          <p>{selectedAddress.fullName}</p>
          <p className="phone">{selectedAddress.contact}</p>
          <p className="sub-text">
            {selectedAddress.house}, {selectedAddress.area}
          </p>
          <p className="sub-text">{selectedAddress.landmark}</p>
          <p className="sub-text">
            {selectedAddress.city.toUpperCase()},{" "}
            {selectedAddress.state.toUpperCase()} {selectedAddress.pincode}
          </p>
          <span className="gray-hr-line"></span>
        </div>
      )}
      <button className="btn btn-primary mx-auto" onClick={displayRazorpay}>
        Place Order
      </button>
    </div>
  );
}

export { CheckoutBill };
