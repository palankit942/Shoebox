import React from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../context/productContext/product-context";
import "../pages/home/home.css";

function CategoryCards({ categoryImage, categoryName, categoryValue }) {
  const { dispatch } = useProduct();
  let navigate = useNavigate();

  function categoryHandler() {
    dispatch({ type: "CATEGORY", payload: categoryValue });
    navigate("/product");
  }
  return (
    <div>
      <div className="card card-vertical card-shadow" onClick={categoryHandler}>
        <div className="card-head">
          <div className="card-img">
            <img src={categoryImage} alt="card" />
          </div>
          <div className="card-texts">
            <h4 className="card-title">{categoryName}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CategoryCards };
