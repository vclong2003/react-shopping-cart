import React from "react";
import S from "./ProductItem.styled";

import { AppDispatch, RootState } from "../../../store";
import { IProduct } from "../../../interfaces/product.interfaces";

import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "../../../store/slices/product";

interface IProductItemProps {
  product: IProduct;
}

export default function ProductItem({ product }: IProductItemProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct } = useSelector(
    (state: RootState) => state.productState,
  );
  const handleIsSelected = () => {
    if (selectedProduct?.productId === productId) {
      return true;
    }
    return false;
  };
  const { productId, imageUrl, productName, description, price } = product;
  const handleSelect = () => {
    dispatch(selectProduct(product));
  };

  return (
    <S.ProductItem $isSelected={handleIsSelected()}>
      <S.ImageContainer>
        <S.Image src={imageUrl} alt="" />
      </S.ImageContainer>
      <S.Details>
        <S.Name>{productName}</S.Name>
        <S.Description>{description}</S.Description>
        <S.Splitter></S.Splitter>
        <S.MoreDetails>
          <S.Price>${price}</S.Price>
          <S.Splitter></S.Splitter>
          <S.MoreDetailsClickable onClick={handleSelect}>
            Details
          </S.MoreDetailsClickable>
        </S.MoreDetails>
      </S.Details>
    </S.ProductItem>
  );
}
