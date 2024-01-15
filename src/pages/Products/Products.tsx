import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../store/slices/products";
import ProductDetail from "./ProductDetail/ProductDetail";
import ProductList from "./ProductList/ProductList";
import * as S from "./Products.styled";

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);

  const [productIndex, setProductIndex] = useState<number>(0);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <S.ProductPage>
      <S.PageContent>
        <S.Left>
          {products.length !== 0 ? (
            <ProductDetail product={products[productIndex]} />
          ) : (
            ""
          )}
        </S.Left>
        <S.Right>
          {products.length !== 0 ? (
            <ProductList
              setProductIndex={setProductIndex}
              products={products}
            />
          ) : (
            ""
          )}
        </S.Right>
      </S.PageContent>
    </S.ProductPage>
  );
}
