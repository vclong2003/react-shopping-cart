import { ENotificationType } from "../enum";

export interface IProduct {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
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

export interface IRoute {
  path: string;
  component: JSX.Element;
}

export interface INotification {
  message: string;
  type: ENotificationType;
}
