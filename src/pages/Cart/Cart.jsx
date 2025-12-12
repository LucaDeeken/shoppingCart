import styles from "./Cart.module.css";

function Cart() {
  return (
    <>
      <main className={styles.outerLayout}>
        <section className={styles.shoppingBag}></section>
        <section className={styles.orderSummary}></section>
      </main>
    </>
  );
}

export default Cart;
