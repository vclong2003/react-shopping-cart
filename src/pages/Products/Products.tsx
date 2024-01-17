//Products.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchAllProducts, selectProduct } from "../../store/slices/product";
import ProductDetail from "./ProductDetail/ProductDetail";
import ProductList from "./ProductList/ProductList";
import * as S from "./Products.styled";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct, loading } = useSelector(
    (state: RootState) => state.productState,
  );

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const handleClosePopup = () => {
    dispatch(selectProduct(null));
  };

  return (
    <S.ProductPage>
      {loading && <LoadingOverlay />}
      <S.ProductDetailPopup
        show={selectedProduct !== null}
        onClose={handleClosePopup}
      >
        {selectedProduct && <ProductDetail product={selectedProduct} />}
      </S.ProductDetailPopup>
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
