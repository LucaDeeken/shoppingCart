import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Shop/CardDetail/CardDetail";
import CardDetails from "./pages/Shop/CardDetail/CardDetail";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "shop", element: <Navigate to="/shop/1" replace /> },
      { path: "shop/:page", element: <Shop /> },
      { path: "artikel/:id", element: <CardDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "*", element: <ErrorPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
