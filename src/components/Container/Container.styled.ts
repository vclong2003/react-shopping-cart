import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

const Container = styled.div`
  width: 100%;

  margin: 0 auto;

  padding: 0 var(--s-3);

  @media ${DEVICES.TABLET} {
    max-width: 720px;
  }
  @media ${DEVICES.LAPTOP} {
    max-width: 960px;
  }
  @media ${DEVICES.LAPTOP_L} {
    max-width: 1320px;
  }
`;

export default { Container };
