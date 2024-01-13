import { useState } from "react";
import { IProduct } from "../../interfaces";

export default function ProductDetail({ product }: { product: IProduct }) {
  const [quantity, setQuantity] = useState<number>(0);
  return (
    <div className="rightContent">
      <div className="imgContainer">
        <img src="https://picsum.photos/700/500" alt="" />
      </div>
      <div className="nameContainer">{product.productName}</div>
      <div className="desContainer">{product.description}</div>

      <div className="btnContainer">
        <div className="quantityBtn"></div>
        <div className="addToCartBtn">
          <div className="priceContainer">{product.price}$</div>
          <button type="button">
            <i className="bi bi-cart-fill"></i> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
