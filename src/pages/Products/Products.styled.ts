import styled from "styled-components";
import Container from "../../components/Container/Container";
import { DEVICES } from "../../config/responsiveBreakpoints";

const ProductPage = styled.div`
  padding-top: var(--s-6);
  padding-bottom: var(--s-6);
  background-color: var(--gray-light);
`;

const PageContent = styled(Container)`
  display: flex;
  flex-direction: row;
  gap: var(--s-4);
`;

const Left = styled.div`
  display: none;

  @media ${DEVICES.TABLET} {
    display: block;
    flex: 7;
  }
`;

const Right = styled.div`
  width: 100%;
  @media ${DEVICES.TABLET} {
    flex: 5;
  }
`;

export { ProductPage, PageContent, Left, Right };
