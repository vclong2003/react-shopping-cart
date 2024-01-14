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

export interface IRoute {
  path: string;
  component: JSX.Element;
}
