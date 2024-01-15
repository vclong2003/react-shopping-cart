import { IProduct } from "../../../interfaces";
import S from "./ProductList.styled";

interface IProductListProp {
  products: Array<IProduct>;
  setProductIndex: (index: number) => void;
}

export default function ProductList({
  products,
  setProductIndex,
}: IProductListProp) {
  return (
    <S.ProductList>
      {products.map((product, index) => {
        return (
          <S.ProductItem key={index}>
            <S.ImageContainer>
              <S.Image src={product.imageUrl} alt="" />
            </S.ImageContainer>
            <S.Details>
              <S.Name>{product.productName}</S.Name>
              <S.Description>{product.description}</S.Description>
              <S.Splitter></S.Splitter>
              <S.MoreDetails>
                <S.Price>${product.price}</S.Price>
                <S.Splitter></S.Splitter>
                <S.MoreDetailsClickable onClick={() => setProductIndex(index)}>
                  Details
                </S.MoreDetailsClickable>
              </S.MoreDetails>
            </S.Details>
          </S.ProductItem>
        );
      })}
    </S.ProductList>
  );
}
