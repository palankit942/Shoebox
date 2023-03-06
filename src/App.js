import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Product,
  Login,
  Signup,
  Cart,
  Wishlist,
  Checkout,
  OrderSummary,
  ProductDetail
} from "./pages/pages";
import {
  Navbar,
  Footer,
  RequiresAuth,
  PrivateAuth,
  NotFound
} from "./components/Components.jsx";
import Mockman from "mockman-js";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App flex flex-col min-h-screen">
      <div className="header">
        <Navbar setSearch={setSearch} />
      </div>
      <div className="main grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product search={search} />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route
            path="/login"
            element={
              <PrivateAuth>
                <Login />
              </PrivateAuth>
            }
          />
          <Route
            path="/signup"
            element={
              <PrivateAuth>
                <Signup />
              </PrivateAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequiresAuth>
                <Cart />
              </RequiresAuth>
            }
          />
          <Route
            path="/wishlist"
            element={
              <RequiresAuth>
                <Wishlist />
              </RequiresAuth>
            }
          />
          <Route
            path="/checkout"
            element={
              <RequiresAuth>
                <Checkout />
              </RequiresAuth>
            }
          />
          <Route
            path="/order/:orderId"
            element={
              <RequiresAuth>
                <OrderSummary />
              </RequiresAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/mock" element={<Mockman />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
