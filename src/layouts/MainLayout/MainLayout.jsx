import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { createContext } from "react";
import cartLogo from "../../assets/cart.png";
import { ProductsContext } from "../../context/ProductsContext";

function MainLayout() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function changeCart(item, amount) {
    const itemExists = cart.find((oldItem) => oldItem.product.id == item.id);
    console.log(itemExists);
    console.log(item);
    if (itemExists) {
      if (amount == 0) {
        setCart((prevCart) =>
          prevCart.filter((oldItem) => oldItem.product.id !== item.id)
        );
      } else {
        setCart(
          cart.map((oldItem) =>
            oldItem.product.id == item.id
              ? { ...oldItem, quantity: oldItem.quantity + amount }
              : oldItem
          )
        );
      }
    } else {
      setCart([...cart, { product: item, quantity: amount }]);
    }
    console.log(cart);
  }

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
        <ProductsContext.Provider
          value={{ products, cart, setCart, changeCart }}
        >
          <Outlet /> {/* Hier landen Home, Shop, Cart */}
        </ProductsContext.Provider>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}

export default MainLayout;
