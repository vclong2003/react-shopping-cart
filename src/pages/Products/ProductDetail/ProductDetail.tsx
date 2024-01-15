import { IProduct } from "../../../interfaces";
import * as S from "./ProductDetail.styled";
import { useEffect, useState } from "react";
import QuantityInput from "../../../components/QuanityInput/QuantityInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { addCartItem } from "../../../store/slices/cart";

interface IProductDetailProps {
  product: IProduct;
}

export default function ProductDetail({ product }: IProductDetailProps) {
  const { imageUrl, productName, description, price } = product;
  const [quantity, setQuantity] = useState<number>(1);
  const [finalPrice, setFinalPrice] = useState<number>(price * quantity);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setFinalPrice(price * quantity);
  }, [quantity, price]);

  return (
    <S.ProductDetail>
      <S.ImageContainer>
        <S.Image src={imageUrl} alt="" />
      </S.ImageContainer>
      <S.Name>{productName}</S.Name>
      <S.Description>{description}</S.Description>

      <S.ButtonRow>
        <QuantityInput quantity={quantity} onSetQuantity={setQuantity} />
        <S.Splitter />
        <S.Price>{finalPrice.toFixed(2)}$</S.Price>
        <S.AddToCartBtn
          onClick={() => dispatch(addCartItem({ product, quantity }))}
        >
          <i className="bi bi-cart-fill"></i> Add to cart
        </S.AddToCartBtn>
      </S.ButtonRow>
    </S.ProductDetail>
  );
}
