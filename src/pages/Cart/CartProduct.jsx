import styles from "./CartProduct.module.css";

function CartProduct() {
  const { cart } = useContext(ProductsContext);

  const [articleAmount, changeArticleAmount] = useState(0);

  function increaseArticleNum() {
    setArticleToCart((prev) => prev + 1);
  }

  function decreaseArticleNum() {
    setArticleToCart((prev) => (prev > 0 ? prev - 1 : 0));
  }

  console.log(cart);
  return (
    <>
      <article>
        <img src="" alt="" />
        <div>
          <h2>name</h2>
          <p>amount5</p>
        </div>

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
            value={articleAmount}
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
        <button>delete</button>
        <p>price</p>
      </article>
    </>
  );
}

export default Cart;
