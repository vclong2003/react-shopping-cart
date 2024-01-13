import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchAllProducts } from "../../store/slices/products";
import ProductDetail from "./product_detail";
import Container from "../../components/Container/Container";

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <Container className="container">
      {products.length !== 0 ? <ProductDetail product={products[0]} /> : ""}
      <div className="leftContent"></div>
    </Container>
  );
}
