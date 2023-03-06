import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCartServerCalls } from "../../context/cartContext/useCartServerCalls.js";
import { useProduct } from "../../context/productContext/product-context.js";
import { useWishlistServerCalls } from "../../context/wishlistContext/useWishlistServerCalls.js";
import "./productDetail.css";

function ProductDetail() {
  const { productId } = useParams();
  const { filteredProducts } = useProduct();
  const { addToWishlist } = useWishlistServerCalls();
  const { addToCart } = useCartServerCalls();
  const [isLoading, setIsLoading] = useState(false);

  const getProduct = () => {
    return filteredProducts.find((prod) => prod._id === productId);
  };
  const product = getProduct();
  const { brand, title, price, rating, prodImage } = product;

  return (
    <div className="product-details flex flex-col justify-center items-center my-8">
      <img className="w-96" src={prodImage} alt="product" />
      <div className="product-details-content p-4">
        <h3>{brand}</h3>
        <h5 className="gray-text">{title}</h5>
        <p>⭐{rating}</p>
        <p>Rs. {price}</p>
        <button
          disabled={isLoading}
          className="btn btn-primary"
          onClick={() => addToCart({ ...product }, setIsLoading)}
        >
          Add to Cart
        </button>
        <button
          disabled={isLoading}
          className="btn btn-outline"
          onClick={() => addToWishlist({ ...product }, setIsLoading)}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export { ProductDetail };
