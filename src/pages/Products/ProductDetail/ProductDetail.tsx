import { IProduct } from "../../../interfaces";
import * as S from "./ProductDetail.styled";
import CartQuantityButton from "../../../components/QuanityInput/QuantityInput";
import { useState } from "react";

interface IProductDetailProps {
  product: IProduct;
}

export default function ProductDetail({ product }: IProductDetailProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const { imageUrl, productName, description, price } = product;

  return (
    <S.ProductDetail>
      <S.ImageContainer>
        <S.Image src={imageUrl} alt="" />
      </S.ImageContainer>
      <S.Name>{productName}</S.Name>
      <S.Description>{description}</S.Description>

      <S.ButtonRow>
        <CartQuantityButton quantity={quantity} onSetQuantity={setQuantity} />
        <S.Splitter />
        <S.Price>{price}$</S.Price>
        <S.AddToCartBtn>
          <i className="bi bi-cart-fill"></i> Add to cart
        </S.AddToCartBtn>
      </S.ButtonRow>
    </S.ProductDetail>
  );
}
