import { IProduct } from "../../interfaces";

export default function ProductDetail({ product }: { product: IProduct }) {
  return (
    <div className="rightContent">
      <div className="imgContainer">
        <img src="https://picsum.photos/700/500" alt="" />
      </div>
      <div className="nameContainer">{product.productName}</div>
      <div className="desContainer">{product.description}</div>
    </div>
  );
}
