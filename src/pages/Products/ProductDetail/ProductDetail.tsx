import React, { useEffect, useState } from "react";
import * as S from "./ProductDetail.styled";

import QuantityInput from "../../../components/QuanityInput/QuantityInput";

import { AppDispatch } from "../../../store";
import { ENotificationType } from "../../../enum";
import { IProduct } from "../../../interfaces/product.interfaces";

import { useDispatch } from "react-redux";
import { addCartItem } from "../../../store/slices/cart";
import { setNotification } from "../../../store/slices/notification";

interface IProductDetailProps {
  product: IProduct;
}

export default function ProductDetail({ product }: IProductDetailProps) {
  const { imageUrl, productName, description, price } = product;
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = () => {
    dispatch(addCartItem({ product, quantity }));
    dispatch(
      setNotification({
        message: "Product added to your cart! 😍",
        type: ENotificationType.Success,
      }),
    );
  };

  useEffect(() => {
    setQuantity(1);
  }, [product]);

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
