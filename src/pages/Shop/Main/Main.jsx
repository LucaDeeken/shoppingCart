import styles from "./Main.module.css";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../../context/ProductsContext";
import ProductCard from "./productCard/ProductCard";

function Main() {
  const { productsQuery, selectedCategory, isSidebarOpen } =
    useContext(ProductsContext);
  console.log(productsQuery);
  const cardsPerPage = 8;
  const { page } = useParams();
  const navigate = useNavigate();
  const currentPage = Number(page) || 1;
  const totalPages = Math.ceil(productsQuery.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = productsQuery.slice(indexOfFirstCard, indexOfLastCard);
  console.log(productsQuery);
  //Navigates to page 1, if a number out of range was selected
  useEffect(() => {
    if (productsQuery.length === 0) return; // noch keine Produkte → nichts tun
    if (currentPage < 1 || currentPage > totalPages) {
      navigate("/shop/1", { replace: true });
    }
  }, [currentPage, totalPages, navigate, productsQuery]);

  return (
    <>
      <main className={styles.main}>
        <section
          className={`${styles.cardArea} ${isSidebarOpen ? styles.sidebarMobileOpen : ""}`}
        >
          <h2 className={styles.breadcrumbs}>
            {selectedCategory} ({productsQuery.length})
          </h2>
          {currentCards.map((object) => (
            <ProductCard
              key={object.id}
              productContent={object}
              onClick={() => navigate(`/artikel/${object.id}`)}
            />
          ))}
        </section>
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => navigate(`/shop/${num}`)}
              className={
                num === currentPage
                  ? styles.activePageButton
                  : styles.pageButton
              }
            >
              {num}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}

export default Main;
