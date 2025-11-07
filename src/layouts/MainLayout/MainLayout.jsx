import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const ProductsContext = createContext([]);

function MainLayout() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
    console.log(products);
  }, []);

  return (
    <>
      <div className={styles.outerLayout}>
        <nav className={styles.navbar}>
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
        <footer className={styles.footer}>
          <section className={styles.footerSectionLinks}>
            <ul>
              <h3>Company</h3>
              <li>Eins</li>
              <li>Zwei</li>
              <li>Drei</li>
              <li>Vier</li>
            </ul>
          </section>
          <section className={styles.footerSectionLinks}>
            <ul>
              <h3>Brand</h3>
              <li>Eins</li>
              <li>Zwei</li>
              <li>Drei</li>
              <li>Vier</li>
            </ul>
          </section>
        </footer>
      </div>
    </>
  );
}

export default MainLayout;
