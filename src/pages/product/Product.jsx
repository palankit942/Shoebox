import { React, useState } from "react";
import { FilterDrawer } from "./FilterDrawer";
import { FilterProducts } from "./FilterProducts";
import "./product.css";

function Product({ search }) {
  const [drawerVisibility, setDrawerVisibility] = useState(true);

  return (
    <div className="product-content">
      <FilterDrawer drawerVisibility={drawerVisibility} />
      <FilterProducts
        search={search}
        drawerVisibility={drawerVisibility}
        setDrawerVisibility={setDrawerVisibility}
      />
    </div>
  );
}

export { Product };
