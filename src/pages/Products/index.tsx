import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchAllProducts } from "../../store/slices/products";
import ProductDetail from "./product_detail";

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(products);
  const productsList = [...products];

  return (
    <div className="container">
      <ProductDetail product={productsList[0]} />
      <div className="leftContent"></div>
    </div>
  );
}
