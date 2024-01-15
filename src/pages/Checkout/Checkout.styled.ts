import styled from "styled-components";
import Container from "../../components/Container/Container";

export const Checkout = styled.div`
  background-color: var(--gray-light);
  min-width: 100vh;
  padding: var(--s-4) 0;
`;
export const CheckoutContainer = styled(Container)`
 
`;
export const CheckoutTitle = styled.h1`
  border-radius: var(--br-lg);
  box-shadow: var(--shadow-md);
  background-color: var(--white);
  text-align: center;
  color: --black;
  padding: 20px;
  font-size: 16px;
`;

export const CheckoutContent = styled.div`
  margin-top: 20px;
`;

// Add additional styled components as needed
