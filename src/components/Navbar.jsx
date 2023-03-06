import React, { useCallback } from "react";
import Logo from "../assets/logo_svg.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../stylesheets/navbar.css";
import { useWishlist } from "../context/wishlistContext/wishlist-context";
import { useCart } from "../context/cartContext/cart-context";
import { useAuthFunctions } from "../context/authContext/useAuthFunctions.js";

export function Navbar({ setSearch }) {
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const token = localStorage.getItem("ecommToken");
  const { logout } = useAuthFunctions();
  const location = useLocation();
  const navigate = useNavigate();

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    setSearch(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimizedFn = useCallback(debounce(handleChange), []);

  const searchHandler = (e) => {
    e.preventDefault();
    if (location.pathname !== "/product") {
      navigate("/product");
    }
  };

  return (
    <header className="shoebox-navbar">
      <nav>
        <div className="shoebox-logo">
          <Link to="/">
            <img src={Logo} alt="shoebox-logo" />
          </Link>
        </div>
        <div className="search-bar">
          <div className="input-group">
            <form onSubmit={searchHandler}>
              <input
                className="simple-input"
                id="name-input"
                type="text"
                placeholder="Search"
                onChange={(e) => optimizedFn(e.target.value)}
              />
            </form>
          </div>
        </div>
        <ul className="nav-links">
          <li className="nav-items">
            {!token ? (
              <Link to="/login" className="mx-4">
                <button className="btn btn-outline">Login</button>
              </Link>
            ) : (
              <button onClick={logout} className="btn btn-outline">
                Logout
              </button>
            )}
          </li>
          <li className="nav-items">
            <Link to="/wishlist">
              <div className="badge-container">
                <i className="shopping-cart fa-regular fa-heart">
                  <span className="badge badge-ico">
                    {wishlistState.quantity}
                  </span>
                </i>
              </div>
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/cart">
              <div className="badge-container">
                <i className="shopping-cart fa-solid fa-cart-shopping">
                  <span className="badge badge-ico">{cartState.quantity}</span>
                </i>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
