import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import ErrorPage from "./pages/ErrorPage/ErrorPage";



const routes = [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <Cart /> },
        { path: "*", element: <ErrorPage /> }, // Catch-All 404
      ],
      errorElement: <ErrorPage />
    },
  ];
  

export default routes;