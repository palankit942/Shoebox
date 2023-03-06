import React, { useState } from "react";
import { Empty } from "../../components/Empty";
import { useCartServerCalls } from "../../context/cartContext/useCartServerCalls";
import { useWishlistServerCalls } from "../../context/wishlistContext/useWishlistServerCalls";
import { useWishlist } from "../../context/wishlistContext/wishlist-context.js";
import "./wishlist.css";

function Wishlist() {
  const { wishlistState } = useWishlist();
  const { deleteFromWishlist } = useWishlistServerCalls();
  const { addToCart } = useCartServerCalls();
  const [isLoading, setIsLoading] = useState(false);

  function cartHandler(item) {
    addToCart({ ...item }, setIsLoading);
    deleteFromWishlist(item._id);
  }

  return (
    <div className="wishlist-container">
      <h3>Wishlist</h3>
      <div className="flex flex-wrap gap-4 m-4 justify-evenly">
        {wishlistState.quantity === 0 ? (
          <Empty emptyText="Wishlist" />
        ) : (
          wishlistState.items.map((item) => (
            <div key={item._id} className="card card-vertical dismiss-card">
              <div className="card-head">
                <div className="card-img">
                  <img src={item.prodImage} alt="wishlist" />
                </div>
                <div className="card-texts">
                  <h4 className="card-title">{item.brand}</h4>
                  <p className="text-base">{item.title}</p>
                  <p className="card-text">
                    <span className="price-now text-md">Rs. {item.price}</span>
                  </p>
                </div>
              </div>
              <div className="card-buttons">
                <button
                  className="card-btn-primary"
                  onClick={() => cartHandler(item)}
                  disabled={isLoading}
                >
                  Add to cart
                </button>
              </div>
              <button
                className="card-exit-btn"
                onClick={() => deleteFromWishlist(item._id)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export { Wishlist };
