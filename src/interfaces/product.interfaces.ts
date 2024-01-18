export interface IProduct {
  productId: string;
  productName: string;
  description: string;
  imageUrl: string;
  price: number;
}
export type TProductsApiResponeData = IProduct[];
export interface IProductState {
  products: IProduct[];
  selectedProduct: IProduct | null;
  loading: boolean;
}
