import { React, useState, useEffect } from "react";
import { useProduct } from "../../context/productContext/product-context.js";
import "./product.css";

function FilterDrawer({ drawerVisibility }) {
  const { state, dispatch } = useProduct();

  // hiding drawer on small screen size
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <section
      style={{ display: width <= 800 && drawerVisibility ? "none" : "block" }}
      className="filter-drawer p-4"
    >
      <div className="filter-head flex justify-between items-center">
        <h3>Filters</h3>
        <button
          className="btn btn-outline"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Clear
        </button>
      </div>

      <span className="hr-gray-line"></span>
      <div className="filter price-range">
        <h4 className="filter-heading">Price Range (0-2K)</h4>
        <input
          type="range"
          list="price-list"
          min="0"
          max="2000"
          step="250"
          value={state.priceRange}
          onChange={(e) =>
            dispatch({ type: "PRICE-RANGE", payload: e.target.value })
          }
        />
        <datalist id="price-list">
          <option value="0" label="0"></option>
          <option value="250"></option>
          <option value="500"></option>
          <option value="750"></option>
          <option value="1000" label="1k"></option>
          <option value="1250"></option>
          <option value="1500"></option>
          <option value="1750"></option>
          <option value="2000" label="2k"></option>
        </datalist>
      </div>
      <span className="hr-gray-line"></span>
      <div className="filter category">
        <h4 className="filter-heading">Category</h4>
        <h5>Male</h5>
        <ul>
          <li className="category-list-item">
            <label htmlFor="casual-m">
              <input
                className="mr-2"
                type="checkbox"
                value="casual-m"
                id="casual-m"
                checked={state["categories"].includes("casual-m")}
                onChange={(e) =>
                  dispatch({ type: "CATEGORY", payload: e.target.value })
                }
              />
              Casual
            </label>
          </li>
          <li className="category-list-item">
            <label htmlFor="formal-m">
              <input
                className="mr-2"
                type="checkbox"
                value="formal-m"
                id="formal-m"
                checked={state["categories"].includes("formal-m")}
                onChange={(e) =>
                  dispatch({ type: "CATEGORY", payload: e.target.value })
                }
              />
              Formal
            </label>
          </li>
          <li className="category-list-item">
            <label htmlFor="sport-m">
              <input
                className="mr-2"
                type="checkbox"
                value="sport-m"
                id="sport-m"
                checked={state["categories"].includes("sport-m")}
                onChange={(e) =>
                  dispatch({ type: "CATEGORY", payload: e.target.value })
                }
              />
              Sport
            </label>
          </li>
        </ul>
        <h5>Female</h5>
        <ul>
          <li className="category-list-item">
            <label htmlFor="casual-f">
              <input
                className="mr-2"
                type="checkbox"
                value="casual-f"
                id="casual-f"
                checked={state["categories"].includes("casual-f")}
                onChange={(e) =>
                  dispatch({ type: "CATEGORY", payload: e.target.value })
                }
              />
              Casual
            </label>
          </li>
          <li className="category-list-item">
            <label htmlFor="boot-f">
              <input
                className="mr-2"
                type="checkbox"
                value="boot-f"
                id="boot-f"
                checked={state["categories"].includes("boot-f")}
                onChange={(e) =>
                  dispatch({ type: "CATEGORY", payload: e.target.value })
                }
              />
              Boot
            </label>
          </li>
        </ul>
      </div>
      <span className="hr-gray-line"></span>
      <div className="filter rating">
        <h4 className="filter-heading">Rating</h4>
        <label htmlFor="four">
          <input
            className="mr-2"
            type="radio"
            name="rating"
            value="4"
            id="four"
            checked={state["rating"] === "4"}
            onChange={(e) =>
              dispatch({ type: "RATING", payload: e.target.value })
            }
          />
          4 star or above
        </label>
        <label htmlFor="three">
          <input
            className="mr-2"
            type="radio"
            name="rating"
            value="3"
            id="three"
            checked={state["rating"] === "3"}
            onChange={(e) =>
              dispatch({ type: "RATING", payload: e.target.value })
            }
          />
          3 star or above
        </label>
        <label htmlFor="two">
          <input
            className="mr-2"
            type="radio"
            name="rating"
            value="2"
            id="two"
            checked={state["rating"] === "2"}
            onChange={(e) =>
              dispatch({ type: "RATING", payload: e.target.value })
            }
          />
          2 star or above
        </label>
        <label htmlFor="one">
          <input
            className="mr-2"
            type="radio"
            name="rating"
            value="1"
            id="one"
            checked={state["rating"] === "1"}
            onChange={(e) =>
              dispatch({ type: "RATING", payload: e.target.value })
            }
          />
          1 star or above
        </label>
      </div>
      <span className="hr-gray-line"></span>
      <div className="filter sort-by">
        <h4 className="filter-heading">Sort by</h4>
        <label htmlFor="low">
          <input
            className="mr-2"
            type="radio"
            name="price"
            value="l"
            id="low"
            checked={state.sorting === "low"}
            onChange={() => dispatch({ type: "LOW-TO-HIGH", payload: "low" })}
          />
          Price - low to high
        </label>
        <label htmlFor="high">
          <input
            className="mr-2"
            type="radio"
            name="price"
            value="h"
            id="high"
            checked={state.sorting === "high"}
            onChange={() => dispatch({ type: "HIGH-TO-LOW", payload: "high" })}
          />
          Price - high to low
        </label>
      </div>
      <span className="hr-gray-line"></span>
      <div className="filter stock-delivery">
        <h4 className="filter-heading">Stock/Delivery</h4>
        <ul>
          <li>
            <label htmlFor="inStock">
              <input
                className="mr-2"
                type="checkbox"
                value="inStock"
                id="inStock"
                checked={state.inStock === true}
                onChange={() => dispatch({ type: "IN-STOCK" })}
              />
              In Stock Only
            </label>
          </li>
          <li>
            <label htmlFor="isFastDelivery">
              <input
                className="mr-2"
                type="checkbox"
                value="isFastDelivery"
                id="isFastDelivery"
                checked={state.isFastDelivery === true}
                onChange={() => dispatch({ type: "IS-FAST-DELIVERY" })}
              />
              Fast Delivery Only
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
}

export { FilterDrawer };
