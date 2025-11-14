import styles from "./productCard.module.css";

function ProductCard({ productContent, onClick }) {
  return (
    <>
      <article className={styles.articleCard} onClick={onClick}>
        <h2 className={styles.title}>{productContent.title}</h2>
        <img
          className={styles.articleImg}
          src={productContent.images[0]}
          alt={productContent.name}
        />
        <p className={styles.price}>{productContent.price} $</p>
      </article>
    </>
  );
}

export default ProductCard;
