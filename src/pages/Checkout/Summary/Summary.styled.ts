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
  padding: 20px;
  background-color: #fff;
  box-shadow: var(--shadow-md);
  border-radius: var(--br-lg);
`;

export const SummaryTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TotalLabel = styled.h1`
  font-weight: bold;
`;

export const TotalAmount = styled.h1`
  color: #e74c3c;
`;

export const CheckoutButton = styled(Button)`
  background-color: var(--blue);
  margin: var(--s-3) 0;
  font-size: var(--fs-lg);
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
`;

export const ContinueButton = styled(Button)`
  background-color: transparent;
  width: 100%;
  font-size: var(--fs-lg);
  border: 1px solid var(--blue);
  color: var(--blue);
`;
