import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { createContext } from "react";
import cartLogo from "../../assets/cart.png";

export const ProductsContext = createContext([]);

function MainLayout() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
    console.log(products);
  }, []);

  return (
    <>
      <div className={styles.outerLayout}>
        <nav className={styles.navbar}>
          <img
            src={cartLogo}
            className={styles.logo}
            alt="Logo, which is a cart"
          />
          <h1 className={styles.header}>FreshCart</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
        <ProductsContext.Provider value={products}>
          <Outlet /> {/* Hier landen Home, Shop, Cart */}
        </ProductsContext.Provider>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}

export default MainLayout;
