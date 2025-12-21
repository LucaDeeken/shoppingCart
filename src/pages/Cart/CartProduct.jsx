import styles from "./CartProduct.module.css";
import { useState, useEffect, useContext } from "react";

function CartProduct({ object, name, img, amount, price, setCart, cart }) {
  function increaseArticleNum(object) {
    setCart(
      cart.map((item) =>
        item.product.id === object.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseArticleNum(object) {
    if (amount < 1) {
      return;
    } else {
      setCart(
        cart.map((item) =>
          item.product.id === object.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  }
  console.log(object);
  return (
    <>
      <article className={styles.article}>
        <img src={img} alt={name} className={styles.image} />
        <div>
          <h2>{name}</h2>
        </div>

        <div className={styles.inputContainer}>
          <button
            type="button"
            className={styles.minusBtn}
            onClick={() => {
              decreaseArticleNum(object);
            }}
          >
            –
          </button>
          <input
            type="num"
            id="article"
            className={styles.input}
            value={amount}
            readOnly
          />
          <button
            type="button"
            className={styles.plusBtn}
            onClick={() => {
              increaseArticleNum(object);
            }}
          >
            +
          </button>
        </div>
        <button>delete</button>
        <p>{price}</p>
      </article>
    </>
  );
}

export default CartProduct;
