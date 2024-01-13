import { IProduct } from "../../interfaces";
import Button from "../../components/Button/Button";

import CartQuantityButton from "./CartQuantityButton/CartQuantityButton";
import { useState } from "react";

export default function ProductDetail({ product }: { product: IProduct }) {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="rightContent">
      <div className="imgContainer">
        <img src="https://picsum.photos/700/500" alt="" />
      </div>
      <div className="nameContainer">{product.productName}</div>
      <div className="desContainer">{product.description}</div>

      <div className="btnContainer">
        <CartQuantityButton quantity={quantity} onSetQuantity={setQuantity} />
        <div className="addToCartBtn">
          <div className="priceContainer">{product.price}$</div>
          <Button type="button">
            <i className="bi bi-cart-fill"></i> Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
