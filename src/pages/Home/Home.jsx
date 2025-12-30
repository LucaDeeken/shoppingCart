import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

function Home() {
  const navigate = useNavigate();
  const { setProductQuery, products, setSelectedCategory } =
    useContext(ProductsContext);

  return (
    <>
      <main className={styles.outerLayout}>
        <div className={styles.welcome}>
          <h2>Welcome to GroceryStore!</h2>
          <p>
            {" "}
            Hungry? Thirsty? Or just curious? We’ve got all your favorites ready
            to jump into your cart. Fresh groceries, delivered fast, no cape
            required.
          </p>
          <div className={styles.btnContainer}>
            <button
              className={styles.buyBtn}
              onClick={() => {
                setProductQuery(products);
                setSelectedCategory("All");
                navigate("/shop");
              }}
            >
              Buy now!
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
