import styles from "./productCard.module.css";

function ProductCard({ productContent, onClick }) {
  return (
    <>
      <article className={styles.articleCard} onClick={onClick}>
        <h2 className={styles.title}>{productContent.title}</h2>
        <img
          className={styles.articleImg}
          src={productContent.image}
          alt={productContent.name}
        />
        <p>
          Preis: <span>{productContent.price}</span>
        </p>
      </article>
    </>
  );
}

export default ProductCard;
