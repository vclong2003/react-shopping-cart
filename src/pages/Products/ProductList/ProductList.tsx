import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import S from "./ProductList.styled";
import { RootState } from "../../../store";

export default function ProductList() {
  const { products } = useSelector((state: RootState) => state.products);

  return (
    <S.ProductList>
      {products.map((product, index) => {
        return <ProductItem key={index} product={product} />;
      })}
    </S.ProductList>
  );
}
