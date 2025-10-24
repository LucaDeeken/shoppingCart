import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.css";
import { Link } from "react-router-dom";



function MainLayout() {

  return (
    <>
    <div className= {styles.outerLayout} >
      <nav className= {styles.navbar} >
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* Hier landen Home, Shop, Cart */}
      <footer className= {styles.footer}>
        <section className= {styles.footerSectionLinks} >
            <ul>
                <h3>Company</h3>
                <li>Eins</li>
                <li>Zwei</li>
                <li>Drei</li>
                <li>Vier</li>
            </ul>
        </section>
        <section className= {styles.footerSectionLinks}>
            <ul>
                <h3>Brand</h3>
                <li>Eins</li>
                <li>Zwei</li>
                <li>Drei</li>
                <li>Vier</li>
            </ul>
        </section>

      </footer>
    </div>
    </>
  )
}

export default MainLayout;
