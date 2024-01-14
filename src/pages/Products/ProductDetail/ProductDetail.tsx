import { IProduct } from "../../../interfaces";
import * as S from "./ProductDetail.styled";
import CartQuantityButton from "../CartQuantityButton/CartQuantityButton";
import { useState } from "react";

export default function ProductDetail({ product }: { product: IProduct }) {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <S.ProductDetail>
      <S.ImageContainer>
        <S.Image src="https://picsum.photos/700/500" alt="" />
      </S.ImageContainer>
      <S.Name>{product.productName}</S.Name>
      <S.Description>{product.description}</S.Description>

      <S.ButtonRow>
        <CartQuantityButton quantity={quantity} onSetQuantity={setQuantity} />
        <S.Splitter />
        <S.Price>{product.price}$</S.Price>
        <S.AddToCartBtn>
          <i className="bi bi-cart-fill"></i> Add to cart
        </S.AddToCartBtn>
      </S.ButtonRow>
    </S.ProductDetail>
  );
}
