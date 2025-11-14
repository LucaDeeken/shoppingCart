import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <main className={styles.outerLayout}>
        <p className={styles.welcome}>
          Welcome to GroceryStore <br></br>
          Hungry? Thirsty? Or just curious? <br></br> We’ve got all your
          favorites ready to jump into your cart. <br></br> Fresh groceries,
          delivered fast, no cape required.
        </p>
      </main>
    </>
  );
}

export default Home;
