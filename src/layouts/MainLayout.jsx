import { Outlet } from "react-router-dom";

function MainLayout() {

  return (
    <>
    <div>
      <nav>Navbar</nav>
      <Outlet /> {/* Hier landen Home, Shop, Cart */}
      <footer>Footer</footer>
    </div>
    </>
  )
}

export default MainLayout;
