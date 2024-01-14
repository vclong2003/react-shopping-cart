import styled from "styled-components";
import Button from "../../../components/Button/Button";

const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--s-3);
  background-color: var(--white);
  padding: var(--s-10) var(--s-6);
  border-radius: var(--br-md);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

const ImageContainer = styled.div``;

const Image = styled.img`
  border-radius: var(--br-md);
  width: 100%;
  height: auto;
`;

const Name = styled.div`
  font-size: var(--fs-3xl);
  font-weight: var(--fw-medium);
`;

const Description = styled.div`
  color: var(--gray);
  font-size: var(--fs-sm);
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Splitter = styled.div`
  flex: 1;
`;

const Price = styled.div`
  margin: 0 var(--s-4);
  font-weight: var(--fw-bold);
  font-size: var(--fs-2xl);
`;

const AddToCartBtn = styled(Button)`
  background-color: var(--blue);
  color: var(--white);
`;

export {
  ProductDetail,
  ImageContainer,
  Image,
  Name,
  Description,
  Price,
  ButtonRow,
  Splitter,
  AddToCartBtn,
};
