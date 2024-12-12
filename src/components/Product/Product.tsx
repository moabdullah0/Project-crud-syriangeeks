import Navbar from "../../pages/Navbar";
import { useEffect, useState } from "react";
import apiProduct, { Products } from "../../Services/ProductService";
import PostProduct from "./PostProduct";
import EditProduct from "./EditProduct";

const Product = () => {
  const [Product, setProduct] = useState<Products[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [Edit, setEdit] = useState(false);
  const [selectedProdcutId, setSelectedProdcutId] = useState<
    number | null | string
  >(null);

  useEffect(() => {
    const { request, cancel } = apiProduct.getData();
    request.then((resposne) => setProduct(resposne.data));
    return () => cancel();
  }, []);
  return (
    <div>
      <Navbar />
      <PostProduct isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Product.map((product) => (
          <div
            className="border rounded-lg overflow-hidden shadow-lg mx-2"
            key={product.id}
          >
            <div>
              <img
                className="h-56 w-full object-cover"
                src={product.image_url}
                alt=""
              />
            </div>
            <div className="px-4 pt-5">
              <h1 className="text-red-400 text-xl font-semibold">
                {product.name}
              </h1>
              <p className="text-sm text-gray-600 w-auto">
                {product.description}
              </p>
              <span className="mx-2 inline-block mt-5 mb-5 bg-red-400 text-white rounded-lg px-4 py-1">
                {product.brand}
              </span>
              <span className=" bg-green-400 text-white rounded-lg px-4 py-1">
                {product.price} $
              </span>
            </div>
            <div className="flex justify-center items-center gap-5 ">
              <button
                className="bg-green-400 text-white rounded-lg px-4 py-1 mb-5"
                onClick={() => setSelectedProdcutId(product.id!)}
              >
                Edit
              </button>
              <button className="bg-red-400 text-white rounded-lg px-4 py-1 mb-5">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProdcutId &&(
        <EditProduct
        isOpen={selectedProdcutId!==null}
        setIsOpen={()=>setSelectedProdcutId(null)}
        id={selectedProdcutId}
        />
      )}
    </div>
  );
};

export default Product;
