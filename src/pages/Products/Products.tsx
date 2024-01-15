import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchAllProducts } from "../../store/slices/products";
import ProductDetail from "./ProductDetail/ProductDetail";
import ProductList from "./ProductList/ProductList";
import * as S from "./Products.styled";

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <S.ProductPage>
      <S.PageContent>
        <S.Left>
          {selectedProduct && <ProductDetail product={selectedProduct} />}
        </S.Left>
        <S.Right>
          <ProductList />
        </S.Right>
      </S.PageContent>
    </S.ProductPage>
  );
}
