import styles from "./Cart.module.css";
import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";

function Cart() {
  const { cart, setCart } = useContext(ProductsContext);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.outerLayout}>
          <section className={styles.shoppingBag}>
            <h2 className={styles.cartHeader}>My Shopping Cart</h2>
            {cart.length > 0 ? (
              cart.map((object) => (
                <CartProduct
                  key={object.product.id}
                  object={object.product}
                  name={object.product.title}
                  img={object.product.images[0]}
                  amount={object.quantity}
                  price={object.product.price}
                  setCart={setCart}
                  cart={cart}
                />
              ))
            ) : (
              <p>There are no items in your cart.</p>
            )}
          </section>

          <section className={styles.orderSummary}>
            <CartSummary cart={cart} />
          </section>
        </div>
      </main>
    </>
  );
}

export default Cart;
