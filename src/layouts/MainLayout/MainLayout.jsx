import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import cartLogo from "../../assets/cart.png";
import { ProductsContext } from "../../context/ProductsContext";
import { mdiCart } from "@mdi/js";
import Icon from "@mdi/react";
import { useNavigate } from "react-router-dom";

function MainLayout() {
  //stateVars
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productsQuery, setProductQuery] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  //modifies the cart
  function changeCart(item, amount) {
    const itemExists = cart.find((oldItem) => oldItem.product.id == item.id);
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
  }

  //fetches dummy-groceries-data
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setProductQuery(data.products);
      });
  }, []);

  return (
    <>
      <div className={styles.outerLayout}>
        <nav
          className={`${styles.navbar} ${isSidebarOpen ? styles.sidebarMobileOpen : ""}`}
        >
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
              <Link
                to="/shop"
                onClick={() => {
                  setProductQuery(products);
                  setSelectedCategory("All");
                }}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
          <a
            className={styles.toCart}
            onClick={() => {
              navigate("/cart");
            }}
          >
            <Icon path={mdiCart} size={1.5} className={styles.toCartIcon} />
            {cart.length > 0 && <span>{cart.length}</span>}
          </a>
        </nav>
        <ProductsContext.Provider
          value={{
            productsQuery,
            cart,
            products,
            setProductQuery,
            setCart,
            changeCart,
            setSelectedCategory,
            selectedCategory,
            isSidebarOpen,
            setIsSidebarOpen,
          }}
        >
          <Outlet /> {/* Hier landen Home, Shop, Cart */}
        </ProductsContext.Provider>
        <footer className={styles.footer}>
          © https://github.com/LucaDeeken
        </footer>
      </div>
    </>
  );
}

export default MainLayout;
