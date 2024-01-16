import React from "react";
import { IProduct } from "../../../interfaces";
import * as S from "./ProductDetail.styled";
import { useState } from "react";
import QuantityInput from "../../../components/QuanityInput/QuantityInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { addCartItem } from "../../../store/slices/cart";

interface IProductDetailProps {
  product: IProduct;
}

export default function ProductDetail({ product }: IProductDetailProps) {
  const { imageUrl, productName, description, price } = product;
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = () => dispatch(addCartItem({ product, quantity }));

  return (
    <S.ProductDetail>
      <S.ImageContainer>
        <S.Image src={imageUrl} alt="" />
      </S.ImageContainer>
      <S.Name>{productName}</S.Name>
      <S.Description>{description}</S.Description>

      <S.ButtonRow>
        <QuantityInput quantity={quantity} onSetQuantity={setQuantity} />
        <S.Splitter />
        <S.Price>{price}$</S.Price>
        <S.AddToCartBtn onClick={handleAddToCart}>
          <i className="bi bi-cart-fill"></i> Add to cart
        </S.AddToCartBtn>
      </S.ButtonRow>
    </S.ProductDetail>
  );
}
