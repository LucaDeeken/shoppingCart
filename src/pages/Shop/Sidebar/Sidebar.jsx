import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <details>
          <summary className={styles.navTitles}>Fruits & Vegetables</summary>
          <ul className={styles.ulItems}>
            <li>Fresh Fruit</li>
            <li>Fresh Vegetables</li>
            <li>Herbs</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>Meat & Poultry</summary>
          <ul className={styles.ulItems}>
            <li>Beef</li>
            <li>Pork</li>
            <li>Chicken</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>Seafood</summary>
          <ul className={styles.ulItems}>
            <li>Fresh Fish</li>
            <li>Shrimps & Shellfish</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>Dairy & Eggs</summary>
          <ul className={styles.ulItems}>
            <li>Milk</li>
            <li>Cheese</li>
            <li>Eggs</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>Bread & Bakery</summary>
          <ul className={styles.ulItems}>
            <li>Fresh Bread</li>
            <li>Pastries</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>Beverages</summary>
          <ul className={styles.ulItems}>
            <li>Water</li>
            <li>Juices</li>
            <li>Coffee & Tea</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>Snacks & Sweets</summary>
          <ul className={styles.ulItems}>
            <li>Chocolate</li>
            <li>Cookies</li>
            <li>Chips</li>
          </ul>
        </details>
      </nav>
    </aside>
  );
}

export default Sidebar;
