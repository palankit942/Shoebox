import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/landing-img.png";
import wave from "../../assets/wave.svg";
import { CategoryCards } from "../../components/CategoryCards";
import "./home.css";
import { useProduct } from "../../context/productContext/product-context";

function Home() {
  const [categories, setCategories] = useState([]);
  const { dispatch } = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      })();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="home-content">
      <section className="hero">
        <div className="hero-content flex flex-col justify-center p-4">
          <h1 className="font-semibold">Shoes from which you shine through.</h1>
          <p className="mx-0 my-4">The journey begins with the perfect pair.</p>
            <button onClick={() => {
              dispatch({type: "CLEAR"});
              navigate("/product");
            }} className="btn btn-primary btn-hero">Shop Now</button>
        </div>
        <div className="hero-img">
          <img
            className="mx-auto w-80p"
            loading="eager"
            src={heroImg}
            alt="hero"
          />
        </div>
      </section>
      <img src={wave} alt="wave" />
      <section className="gender-cards-section">
        <h3>Shop by Category</h3>
        <div className="gender-cards flex flex-wrap items-center justify-evenly gap-4 p-8">
          {categories.length === 0 ? (
            <p>Loading Categories...</p>
          ) : (
            categories.map(
              ({ id, categoryName, categoryImage, categoryValue }) => (
                <CategoryCards
                  key={id}
                  id={id}
                  categoryName={categoryName}
                  categoryImage={categoryImage}
                  categoryValue={categoryValue}
                />
              )
            )
          )}
        </div>
      </section>
    </div>
  );
}

export { Home };
