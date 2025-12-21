import styles from "./Cart.module.css";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import CartProduct from "./CartProduct";

function Cart() {
  const { cart, setCart } = useContext(ProductsContext);

  return (
    <>
      <main className={styles.outerLayout}>
        <section className={styles.shoppingBag}>
          {cart.map((object) => (
            <CartProduct
              object={object.product}
              name={object.product.title}
              img={object.product.images[0]}
              amount={object.quantity}
              price={object.product.price}
              setCart={setCart}
              cart={cart}
            />
          ))}
        </section>
        <section className={styles.orderSummary}></section>
      </main>
    </>
  );
}

export default Cart;
