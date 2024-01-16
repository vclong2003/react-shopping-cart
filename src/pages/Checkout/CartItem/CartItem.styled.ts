import styled from "styled-components";
import Button from "../../../components/Button/Button";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  width: 100%;
  padding: var(--s-5);
  background-color: var(--white);
  gap: var(--s-4);
  flex-wrap: wrap;
  box-shadow: var(--shadow-md);
  border-radius: var(--br-md);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--br-md);
  object-fit: cover;
`;

export const ProductName = styled.h3``;

export const ProductDetails = styled.div`
  flex-grow: 1;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const DetailDescription = styled.div`
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--gray);
  overflow: hidden;
`;
export const Left = styled.div`
  flex: 3;
`;

export const Right = styled.div`
  flex: 9;
  display: flex;
  flex-direction: column;
  row-gap: var(--s-4);
`;
export const Prices = styled.div`
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
`;

export const ButtonRemove = styled(Button)`
  background: none;
  display: flex;
  flex-direction: row-reverse;
  cursor: pointer;
  padding: 0;
  color: var(--red);
  font-size: var(--fs-xl);
`;
