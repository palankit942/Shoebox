import React from "react";
import { Link } from "react-router-dom";
import emptyImg from "../assets/empty-cart.webp";

function Empty({ emptyText }) {
  return (
    <div className="p-4 mx-auto my-8 flex flex-col justify-center items-center">
      <h3 className="font-normal">Oops! Your {emptyText} is empty.</h3>
      <img className="w-96" src={emptyImg} alt="empty-cart" />
      <Link to="/product">
        <button className="btn btn-primary">Go To Shopping</button>
      </Link>
    </div>
  );
}

export { Empty };
