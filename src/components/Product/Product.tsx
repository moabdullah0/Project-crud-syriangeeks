import Navbar from "../../pages/Navbar";
import { useEffect, useState } from "react";
import apiProduct, { Products } from "../../Services/ProductService";
import PostProduct from "./PostProduct";
import EditProduct from "./EditProduct";
import Skelaton from "../../UI/Skelaton";
import { Brand } from "../../constant/SelectItem";
import SearchField from "../../UI/SearchField";

const Product = () => {
  const [Product, setProduct] = useState<Products[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState<Products[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProdcutId, setSelectedProdcutId] = useState<
    number | null | string
  >(null);
  useEffect(() => {
    const { request, cancel } = apiProduct.getData();
    request.then((resposne) => {
      setProduct(resposne.data);
      setLoading(false);
    });
    return () => cancel();
  }, []);
  const FilterData = (seletdBrand: string) => {
    if (seletdBrand == "") {
      setFilterData(Product);
    } else {
      const filtered = Product.filter(
        (product) => product.brand == seletdBrand
      );
      setFilterData(filtered);
    }
  };
  const HandleDelete = (id: string | number | null) => {
    apiProduct.daleteDate(id).then(() => {
      const updateProducts = Product.filter((product) => product.id !== id);
      setFilterData(updateProducts);
      setProduct(updateProducts);
    });
  };
  const handleSearch = () => {
    const filtered = Product.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilterData(filtered);
  };
  return (
    <div>
      <Navbar />
      <PostProduct isOpen={isOpen} setIsOpen={setIsOpen} />
      <SearchField
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      {Brand.map((brand, i) => (
        <button
          key={i}
          onClick={() => FilterData(brand)}
          className="bg-blue-600 text-white font-bold mx-2 px-5 py-2 mb-3 rounded-lg"
        >
          {brand}
        </button>
      ))}
      <button
        className="bg-gray-500 text-white px-10 py-2 mb-3 rounded-lg "
        onClick={() => FilterData("")}
      >
        All Product
      </button>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <Skelaton index={index} loading={loading} />
            ))
          : filterData.map((product) => (
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
                  <button
                    onClick={() => HandleDelete(product.id!)}
                    className="bg-red-400 text-white rounded-lg px-4 py-1 mb-5"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
      </div>
      {selectedProdcutId && (
        <EditProduct
          isOpen={selectedProdcutId !== null}
          setIsOpen={() => setSelectedProdcutId(null)}
          id={selectedProdcutId}
        />
      )}
    </div>
  );
};

export default Product;
