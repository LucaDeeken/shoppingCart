import styles from "./Cart.module.css";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

function Cart() {
  const { cart } = useContext(ProductsContext);

  console.log(cart);
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
