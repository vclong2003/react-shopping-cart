import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveBreakpoints";

export const CartListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: var(--s-4);
  @media ${DEVICES.TABLET} {
    flex: 8;
  }
`;

export const EmptyCartMessage = styled.h3`
  margin-top: var(--s-10);
  text-align: center;
  color: var(--black);
`;
