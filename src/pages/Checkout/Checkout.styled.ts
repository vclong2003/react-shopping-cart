import styled from "styled-components";
import Container from "../../components/Container/Container";

export const Checkout = styled.div`
  background-color: var(--gray-light);
  min-height: 100vh;
  padding: var(--s-4) 0;
`;
export const CheckoutContainer = styled(Container)``;
export const CheckoutTitle = styled.h1`
  border-radius: var(--br-lg);
  box-shadow: var(--shadow-md);
  background-color: var(--white);
  text-align: center;
  color: var(--black);
  padding: var(--s-4);
  font-size: var(--s-5);
`;

export const CheckoutContent = styled.div`
  display: flex;
  gap: var(--s-4);
  margin-top: var(--s-4);
  flex-wrap: wrap;
  align-items: flex-start;
`;
export const CartList = styled.div`
  flex: 7;
`;

export const Summary = styled.div`
  flex: 5;
`;

// Add additional styled components as needed
