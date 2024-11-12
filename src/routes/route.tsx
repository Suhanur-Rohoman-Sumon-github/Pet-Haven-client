import { createBrowserRouter } from "react-router-dom";
import Main from "../layoutes/Main";
import Error from "../pages/error/Error";
import Home from "../pages/ui/home/Home";
import About from "../pages/ui/aboutUs/About";
import Products from "../pages/ui/products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

export default router;
