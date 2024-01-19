import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveBreakpoints";
import Button from "../../../components/Button/Button";

export const Summary = styled.div`
  width: 100%;
  @media ${DEVICES.TABLET} {
    flex: 4;
  }
`;

export const SummaryContainer = styled.div`
  padding: var(--s-4);
  background-color: var(--white);
  box-shadow: var(--shadow-md);
  border-radius: var(--br-md);
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BottomContainer = styled.div``;

export const SummaryTitle = styled.h3`
  margin-bottom: var(--s-4);
  color: var(--black);
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--s-3);
`;

export const TotalLabel = styled.h1`
  margin-top: var(--s-4);
  font-weight: var(--fw-bold);
  font-size: var(--fs-2xl);
`;

export const TotalAmount = styled.div`
  margin-top: var(--s-4);
  color: var(--black);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
`;

export const CheckoutButton = styled(Button)`
  background-color: var(--blue);
  margin: var(--s-3) 0;
  font-size: var(--fs-lg);
  color: var(--white);
  border: none;
  width: 100%;
`;

export const ContinueButton = styled(Button)`
  background-color: transparent;
  width: 100%;
  font-size: var(--fs-lg);
  border: 1px solid var(--blue);
  color: var(--blue);
`;

export const Subtotal = styled.div`
  color: var(--gray);
`;

export const TotalPrice = styled.h4`
  color: var(--black);
`;

export const ShippingCost = styled.div`
  color: var(--gray);
`;

export const CostPrice = styled.h4`
  color: var(--black);
`;
