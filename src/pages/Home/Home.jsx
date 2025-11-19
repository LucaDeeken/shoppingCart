import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <main className={styles.outerLayout}>
        <p className={styles.welcome}>
          <h2>Welcome to GroceryStore!</h2>
          <p>
            {" "}
            Hungry? Thirsty? Or just curious? We’ve got all your favorites ready
            to jump into your cart. Fresh groceries, delivered fast, no cape
            required.
          </p>
          <div className={styles.btnContainer}>
            <button className={styles.buyBtn}>Buy now!</button>
          </div>
        </p>
      </main>
    </>
  );
}

export default Home;
