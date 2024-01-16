import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchAllProducts } from "../../store/slices/products";
import ProductDetail from "./ProductDetail/ProductDetail";
import ProductList from "./ProductList/ProductList";
import * as S from "./Products.styled";
import Popup from "../../components/Popup/Popup";

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct } = useSelector((state: RootState) => state.products);

  const [testShow, setTestShow] = useState(true);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <S.ProductPage>
      <Popup
        show={testShow}
        onClose={() => {
          setTestShow(false);
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
        consequatur, porro labore quaerat expedita nesciunt qui repellendus at,
        doloribus aperiam quas amet officia maxime harum, explicabo nisi
        officiis delectus illo?
      </Popup>
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
