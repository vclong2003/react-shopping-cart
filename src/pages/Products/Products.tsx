import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchAllProducts } from "../../store/slices/products";
import ProductDetail from "./ProductDetail/ProductDetail";
import * as S from "./Products.styled";

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <S.ProductPage>
      <S.PageContent>
        <S.Left>
          {products.length !== 0 ? <ProductDetail product={products[0]} /> : ""}
        </S.Left>
        <S.Right></S.Right>
      </S.PageContent>
    </S.ProductPage>
  );
}
