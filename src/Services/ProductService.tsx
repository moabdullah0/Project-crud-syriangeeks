import HttpServices from "./HttpServices";

export interface Products {
  id?: string;
  name: string;
  category: string;
  price: number;
  image_url: string;
  description: string;
  brand: string;
}
const apiProduct = new HttpServices<Products>("/products");
export default apiProduct;
