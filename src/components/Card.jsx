import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useCartServerCalls } from "../context/cartContext/useCartServerCalls";
import { useWishlistServerCalls } from "../context/wishlistContext/useWishlistServerCalls";

function Card({ product }) {
  const navigate = useNavigate();
  const alert = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const { _id, brand, title, price, rating, prodImage, inStock } = product;
  const { addToWishlist } = useWishlistServerCalls();
  function wishlistHandler() {
    const token = localStorage.getItem("ecommToken");
    if (token) {
      addToWishlist({ ...product }, setIsLoading);
    } else {
      navigate("/login");
      alert.show("Please Login First!", { type: "info" });
    }
  }

  const { addToCart } = useCartServerCalls();
  function cartHandler() {
    const token = localStorage.getItem("ecommToken");
    if (token) {
      addToCart({ ...product }, setIsLoading);
    } else {
      navigate("/login");
      alert.show("Please Login First!", { type: "info" });
    }
  }

  return (
    <div className="card card-vertical badged-card">
      <div className="card-head">
        <div className="card-img">
          <Link to={`/product/${_id}`}>
            <img src={prodImage} alt="card" />
          </Link>
        </div>
        <div className="card-texts">
          <h4 className="card-title">
            {brand}
            <span></span>
          </h4>
          <p className="card-subTitle">{title}</p>
          <p className="card-text">
            <span className="price-now">Rs. {price}</span>
          </p>
        </div>
      </div>
      <div className="card-buttons">
        <button
          disabled={isLoading}
          className="card-btn-primary"
          onClick={cartHandler}
        >
          Add To Cart
        </button>
        <button
          disabled={isLoading}
          className="card-btn-icon"
          onClick={wishlistHandler}
        >
          <i className="far fa-heart"></i>
        </button>
      </div>
      {!inStock && <div className="card-overlay">OUT OF STOCK</div>}
      <div className="card-rating">
        {rating} <i className="fas fa-star"></i>
      </div>
    </div>
  );
}

export { Card };
