import styles from "./Shop.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";

function Shop() {

    return (
      <>
      <div className= {styles.outerLayoutShop} >
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      </>
    )
  }
  
  export default Shop;