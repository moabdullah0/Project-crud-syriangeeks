import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { schema, SchemaForm } from "../../pages/schema"; // Assuming these are correctly set up
import { zodResolver } from "@hookform/resolvers/zod";
import apiProduct from "../../Services/ProductService";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostProduct = ({ isOpen, setIsOpen }: Props) => {
  const Category = ["Electronics", "Games", "Personal Care"];
  const Brand = [
    "Nike",
    "Apple",
    "Philips",
    "DeLonghi",
    "Panasonic",
    "Sony",
    "Xiaomi",
  ];
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SchemaForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: SchemaForm) => {
    try {
      await apiProduct.postData(data);
      reset();
      setIsOpen(false);
    } catch (err) {
      console.log(err);
      setSubmitError("An Error occurred while submitting , please try again");
    }
  };
  return (
    <div>
      {submitError && <h1 className="text-red-400">{submitError}</h1>}
      <button
        className="bg-blue-700 text-white py-2 px-4 mt-5 mb-5 rounded-xl mx-4"
        onClick={() => setIsOpen(true)}
      >
        Add Product
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <form
              className="max-w-sm mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Title Product
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Title Product"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <textarea
                  {...register("description")}
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Product Description"
                />
                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="image_url"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Image Url
                </label>
                <input
                  {...register("image_url")}
                  type="text"
                  id="image_url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Image Product"
                />
                {errors.image_url && (
                  <p className="text-red-500">{errors.image_url.message}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Price
                </label>
                <input
                  {...register("price", { valueAsNumber: true })}
                  type="number"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Price Product"
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <select
                  {...register("category")}
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Select Category</option>
                  {Category.map((category, i) => (
                    <option value={category} key={i}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500">{errors.category.message}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Brand
                </label>
                <select
                  {...register("brand")}
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Select Brand</option>
                  {Brand.map((brand, i) => (
                    <option value={brand} key={i}>
                      {brand}
                    </option>
                  ))}
                </select>
                {errors.brand && (
                  <p className="text-red-500">{errors.brand.message}</p>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-red-600 text-white px-4 py-1 font-bold rounded-lg hover:bg-red-300"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-1 font-bold rounded-lg hover:bg-blue-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default PostProduct;