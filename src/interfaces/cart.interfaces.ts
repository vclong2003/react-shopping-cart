import { IProduct } from "./product.interfaces";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
export interface ICartState {
  cart: ICartItem[];
  loading: boolean;
}
export interface ICartApiData {
  paySuccess: boolean;
  productsInOrder: {
    productId: string;
    quantity: number;
  }[];
}
export interface ICartApiResponeData {
  success: boolean;
}
