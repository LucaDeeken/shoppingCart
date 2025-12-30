import styles from "./CardDetail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

function CardDetail() {
  const { productsQuery, changeCart } = useContext(ProductsContext);
  const { id } = useParams();

  const [article, setArticle] = useState({});
  const [addArticleToCart, setArticleToCart] = useState(0);

  useEffect(() => {
    if (!productsQuery || productsQuery.length === 0) {
      fetch("/api/products.json")
        .then((res) => res.json())
        .then((data) => {
          const articleToFind = data.find((p) => p.id == id);
          setArticle(articleToFind);
        });
    } else {
      const articleToFind = productsQuery.find((p) => p.id == id);
      setArticle(articleToFind);
    }
  }, [productsQuery, id]);

  function increaseArticleNum() {
    setArticleToCart((prev) => prev + 1);
  }

  function decreaseArticleNum() {
    setArticleToCart((prev) => (prev > 0 ? prev - 1 : 0));
  }
  return (
    <>
      <article className={styles.articleCard}>
        <div className={styles.articleContainer}>
          <figure className={styles.figure}>
            <h2 className={styles.articleHeader}>
              Categorie:{" "}
              <span className={styles.articleHeaderCategory}>
                {article?.tags?.[0]}
              </span>
            </h2>
            <img
              className={styles.articleImg}
              src={article?.images?.[0] || "https://via.placeholder.com/400"}
              alt={article?.title || "Loading..."}
            />
          </figure>

          <section className={styles.articleInfo}>
            <h3 className={styles.title}>{article.title}</h3>
            <p>{article.description}</p>
            <p className={styles.price}>${article.price}</p>
            <form>
              <div className={styles.inputContainer}>
                <button
                  type="button"
                  className={styles.minusBtn}
                  onClick={() => {
                    decreaseArticleNum();
                  }}
                >
                  –
                </button>
                <input
                  type="num"
                  id="article"
                  className={styles.input}
                  value={addArticleToCart}
                  readOnly
                />
                <button
                  type="button"
                  className={styles.plusBtn}
                  onClick={() => {
                    increaseArticleNum();
                  }}
                >
                  +
                </button>
              </div>
              <button
                className={styles.addToCartBtn}
                type="button"
                onClick={() => {
                  changeCart(article, addArticleToCart);
                }}
              >
                Add To Cart!
              </button>
            </form>
          </section>
        </div>
      </article>
    </>
  );
}

export default CardDetail;
