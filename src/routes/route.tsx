import { createBrowserRouter } from 'react-router-dom';
import Main from '../layoutes/Main';
import Error from '../pages/error/Error';
import Home from '../pages/ui/home/Home';
import About from '../pages/ui/aboutUs/About';
import Products from '../pages/ui/products/Products';
import Login from '../pages/ui/Login/Login';
import Register from '../pages/ui/Register/Register';
import ProductsDetails from '../pages/ui/ProducDetails/ProductsDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <ProductsDetails />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
