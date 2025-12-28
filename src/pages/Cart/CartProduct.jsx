import styles from "./CartProduct.module.css";
import { mdiDelete } from "@mdi/js";
import Icon from "@mdi/react";
import { useState, useEffect, useContext } from "react";

function CartProduct({ object, name, img, amount, price, setCart, cart }) {
  //increases the article
  function increaseArticleNum(object) {
    setCart(
      cart.map((item) =>
        item.product.id === object.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  //decreases the amount of the article
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

  //deletes the article
  function deleteItem(object) {
    setCart(cart.filter((item) => item.product.id !== object.id));
  }

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
        <button
          type="button"
          className={styles.deleteBtn}
          onClick={() => {
            deleteItem(object);
          }}
        >
          <Icon path={mdiDelete} size={1.5} className={styles.deleteBtn} />
        </button>
        <p className={styles.price}>${price}</p>
      </article>
    </>
  );
}

export default CartProduct;
