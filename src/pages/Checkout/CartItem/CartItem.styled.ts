import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

export const ProductDetails = styled.div`
  flex-grow: 1;
  margin-right: 10px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  button {
    margin-top: 5px;
  }
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
