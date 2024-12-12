import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../components/Product/Product";


const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <App /> },
      {
        path: "product",
        children: [
          { index: true, element: <Product /> },
       
        ],
      }
    ],
  },
]);
export default router;
