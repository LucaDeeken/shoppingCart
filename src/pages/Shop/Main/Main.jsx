import styles from "./Main.module.css";
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../../context/ProductsContext";
import ProductCard from "./productCard/ProductCard";

function Main() {
  const { products, cart } = useContext(ProductsContext);
  console.log(products);
  const cardsPerPage = 8;
  const { page } = useParams();
  const navigate = useNavigate();
  const currentPage = Number(page) || 1;
  const totalPages = Math.ceil(products.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = products.slice(indexOfFirstCard, indexOfLastCard);
  console.log(products);
  //Navigates to page 1, if a number out of range was selected
  useEffect(() => {
    if (products.length === 0) return; // noch keine Produkte → nichts tun
    if (currentPage < 1 || currentPage > totalPages) {
      navigate("/shop/1", { replace: true });
    }
  }, [currentPage, totalPages, navigate, products]);

  return (
    <>
      <main className={styles.main}>
        <section className={styles.cardArea}>
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
