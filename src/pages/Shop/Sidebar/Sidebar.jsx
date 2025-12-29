import styles from "./Sidebar.module.css";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { ProductsContext } from "../../../context/ProductsContext";
import { useState, useEffect, useContext } from "react";

function Sidebar() {
  const {
    setProductQuery,
    products,
    setSelectedCategory,
    setIsSidebarOpen,
    isSidebarOpen,
  } = useContext(ProductsContext);

  function toggleSidebar() {
    isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true);
  }

  function loadClickedCategory(name, products) {
    const filteredProducts = products.filter(
      (item) => item.tags.indexOf(name) >= 0
    );
    setProductQuery(filteredProducts);
  }

  return (
    <>
      <button className={styles.menuButton} onClick={() => toggleSidebar()}>
        ☰
      </button>

      <aside
        className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarMobileOpen : styles.sidebarMobileClosed}`}
      >
        <nav className={styles.nav}>
          {/* Food */}
          <details>
            <summary className={styles.navTitles}>
              Food
              <Icon
                path={mdiChevronDown}
                size={1.5}
                className={styles.arrowDown}
              />
            </summary>
            <ul className={styles.ulItems}>
              <li
                onClick={() => {
                  loadClickedCategory("fruits", products);
                  setSelectedCategory("Fruits");
                  setIsSidebarOpen(false);
                }}
              >
                Fruits
              </li>
              <li
                onClick={() => {
                  loadClickedCategory("vegetables", products);
                  setSelectedCategory("Vegetables");
                  setIsSidebarOpen(false);
                }}
              >
                Vegetables
              </li>
              <li
                onClick={() => {
                  loadClickedCategory("meat", products);
                  setSelectedCategory("Meat");
                  setIsSidebarOpen(false);
                }}
              >
                Meat
              </li>
              <li
                onClick={() => {
                  loadClickedCategory("seafood", products);
                  setSelectedCategory("Seafood");
                  setIsSidebarOpen(false);
                }}
              >
                Seafood
              </li>
              <li
                onClick={() => {
                  loadClickedCategory("dairy", products);
                  setSelectedCategory("Dairy");
                  setIsSidebarOpen(false);
                }}
              >
                Dairy
              </li>
              <li
                onClick={() => {
                  loadClickedCategory("grains", products);
                  setSelectedCategory("Grains");
                  setIsSidebarOpen(false);
                }}
              >
                Grains
              </li>
              <li
                onClick={() => {
                  loadClickedCategory("condiments", products);
                  setSelectedCategory("Condiments");
                  setIsSidebarOpen(false);
                }}
              >
                Condiments
              </li>
              <li
                onClick={() => {
                  loadClickedCategory("desserts", products);
                  setSelectedCategory("Desserts");
                  setIsSidebarOpen(false);
                }}
              >
                Desserts
              </li>
            </ul>
          </details>

          {/* Beverages */}
          <details>
            <summary className={styles.navTitles}>
              Beverages
              <Icon
                path={mdiChevronDown}
                size={1.5}
                className={styles.arrowDown}
              />
            </summary>
            <ul className={styles.ulItems}>
              <li
                onClick={() => {
                  loadClickedCategory("beverages", products);
                  setSelectedCategory("Beverages");
                  setIsSidebarOpen(false);
                }}
              >
                Beverages
              </li>
              <li
                onClick={() => {
                  loadClickedCategory("coffee", products);
                  setSelectedCategory("Coffee");
                  setIsSidebarOpen(false);
                }}
              >
                Coffee
              </li>
            </ul>
          </details>

          {/* Cooking & Health */}
          <details>
            <summary className={styles.navTitles}>
              Cooking & Health
              <Icon
                path={mdiChevronDown}
                size={1.5}
                className={styles.arrowDown}
              />
            </summary>
            <ul className={styles.ulItems}>
              <li
                onClick={() => {
                  loadClickedCategory("cooking essentials", products);
                  setSelectedCategory("Cooking Essentials");
                  setIsSidebarOpen(false);
                }}
              >
                Cooking Essentials
              </li>
              <li
                onClick={() => {
                  loadClickedCategory("health supplements", products);
                  setSelectedCategory("Health Supplements");
                  setIsSidebarOpen(false);
                }}
              >
                Health Supplements
              </li>
            </ul>
          </details>

          {/* Household */}
          <details>
            <summary className={styles.navTitles}>
              Household
              <Icon
                path={mdiChevronDown}
                size={1.5}
                className={styles.arrowDown}
              />
            </summary>
            <ul className={styles.ulItems}>
              <li
                onClick={() => {
                  loadClickedCategory("household essentials", products);
                  setSelectedCategory("Household Essentials");
                  setIsSidebarOpen(false);
                }}
              >
                Household Essentials
              </li>
            </ul>
          </details>

          {/* Pet Supplies */}
          <details>
            <summary className={styles.navTitles}>
              Pet Supplies
              <Icon
                path={mdiChevronDown}
                size={1.5}
                className={styles.arrowDown}
              />
            </summary>
            <ul className={styles.ulItems}>
              <li
                onClick={() => {
                  loadClickedCategory("cat food", products);
                  setSelectedCategory("Cat Food");
                  setIsSidebarOpen(false);
                }}
              >
                Cat Food
              </li>
              <li
                onClick={() => {
                  loadClickedCategory("dog food", products);
                  setSelectedCategory("Dog Food");
                  setIsSidebarOpen(false);
                }}
              >
                Dog Food
              </li>
            </ul>
          </details>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
