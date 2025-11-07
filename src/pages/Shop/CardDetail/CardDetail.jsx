import styles from "./CardDetail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../../layouts/MainLayout/MainLayout";

function CardDetail({ productContent }) {
  const products = useContext(ProductsContext);
  console.log(products);
  const { id } = useParams();
  console.log(id);
  const [article, setArticle] = useState({});
  useEffect(() => {
    const articleToFind = products.find((product) => product.id === Number(id));
    console.log(articleToFind);
    setArticle(articleToFind);
  }, []);
  console.log(article);

  return (
    <>
      <article className={styles.articleCard}>
        <header>
          {" "}
          <h2 className={styles.title}>{article.title}</h2>
        </header>
        <figure>
          <img
            className={styles.articleImg}
            src={article.image}
            alt={article.name}
          />
        </figure>

        <section>
          <h2>Produktbeschreibung</h2>
          <p>{article.description}</p>
        </section>
        <p>
          Preis: <span>{article.price}</span>
        </p>
      </article>
    </>
  );
}

export default CardDetail;
