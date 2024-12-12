import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../components/Product/Product";
import ProductsDetails from "../pages/ProductsDetails";
import Errors from "../pages/Errors";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errors />,
    children: [
      { index: true, element: <App /> },
      {
        path: "product",
        children: [
          { index: true, element: <Product /> },
          { path: "Detailes", element: <ProductsDetails /> },
          { path: "Detailes/:id", element: <ProductsDetails /> },
        ],
      },
      { path: "login", element: <Login /> },
    ],
  },
]);
export default router;
