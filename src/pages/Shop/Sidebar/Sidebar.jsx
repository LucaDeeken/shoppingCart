import styles from "./Sidebar.module.css";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <details>
          <summary className={styles.navTitles}>
            Fruits & Vegetables{" "}
            <Icon
              path={mdiChevronDown}
              size={1.5}
              className={styles.arrowDown}
            />
          </summary>
          <ul className={styles.ulItems}>
            <li>Fresh Fruit</li>
            <li>Fresh Vegetables</li>
            <li>Herbs</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>
            Meat & Poultry{" "}
            <Icon
              path={mdiChevronDown}
              size={1.5}
              className={styles.arrowDown}
            />
          </summary>
          <ul className={styles.ulItems}>
            <li>Beef</li>
            <li>Pork</li>
            <li>Chicken</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>
            Seafood{" "}
            <Icon
              path={mdiChevronDown}
              size={1.5}
              className={styles.arrowDown}
            />
          </summary>
          <ul className={styles.ulItems}>
            <li>Fresh Fish</li>
            <li>Shrimps & Shellfish</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>
            Dairy & Eggs{" "}
            <Icon
              path={mdiChevronDown}
              size={1.5}
              className={styles.arrowDown}
            />
          </summary>
          <ul className={styles.ulItems}>
            <li>Milk</li>
            <li>Cheese</li>
            <li>Eggs</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>
            Bread & Bakery{" "}
            <Icon
              path={mdiChevronDown}
              size={1.5}
              className={styles.arrowDown}
            />
          </summary>
          <ul className={styles.ulItems}>
            <li>Fresh Bread</li>
            <li>Pastries</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>
            Beverages{" "}
            <Icon
              path={mdiChevronDown}
              size={1.5}
              className={styles.arrowDown}
            />
          </summary>
          <ul className={styles.ulItems}>
            <li>Water</li>
            <li>Juices</li>
            <li>Coffee & Tea</li>
          </ul>
        </details>

        <details>
          <summary className={styles.navTitles}>
            Snacks & Sweets{" "}
            <Icon
              path={mdiChevronDown}
              size={1.5}
              className={styles.arrowDown}
            />
          </summary>
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
