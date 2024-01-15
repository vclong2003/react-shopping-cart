import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  width: 100%;
  padding: var(--s-5);
  background-color: var(--white);
  gap: var(--s-5);
  flex-wrap: wrap;
  box-shadow: var(--shadow-md);
  border-radius: var(--br-lg);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProductDetails = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const RemoveButton = styled.button`
  background-color: #ff6464;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #d63030;
  }
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
export const Prices = styled.h1``;
