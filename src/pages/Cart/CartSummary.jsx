import styles from "./CartSummary.module.css";

import { useState, useEffect, useContext } from "react";

function CartSummary({ cart }) {
  const [subTotal, setsubTotal] = useState(0);
  const [vat, setvat] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  //functions for calculating the price
  function getSubtotal(cart) {
    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }

  function getVAT(subTotalPrice) {
    return subTotalPrice * 0.2;
  }

  //refreshes the price, if the cart changes
  useEffect(() => {
    const sub = getSubtotal(cart);
    const vatValue = getVAT(sub);
    setsubTotal(sub.toFixed(2));
    setvat(vatValue.toFixed(2));
    setTotalPrice((sub + vatValue).toFixed(2));
  }, [cart]);

  return (
    <>
      <h2 className={styles.header}>Order Summary</h2>
      <p className={styles.subTotal}>
        Subtotal: <span>${subTotal}</span>
      </p>
      <p className={styles.vat}>
        TAX (20%): <span>${vat}</span>
      </p>
      <p className={styles.totalPrice}>
        Total: <span>${totalPrice}</span>
      </p>
      <button className={styles.checkout}>Checkout</button>
    </>
  );
}

export default CartSummary;
