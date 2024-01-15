import { IProduct } from "../../../interfaces";
import S from "./ProductItem.styled";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../../store/slices/products";
import { AppDispatch } from "../../../store";

interface IProductItemProps {
  product: IProduct;
}

export default function ProductItem({ product }: IProductItemProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleSelect = () => dispatch(selectProduct(product));

  return (
    <S.ProductItem>
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
          <S.MoreDetailsClickable onClick={handleSelect}>
            Details
          </S.MoreDetailsClickable>
        </S.MoreDetails>
      </S.Details>
    </S.ProductItem>
  );
}
