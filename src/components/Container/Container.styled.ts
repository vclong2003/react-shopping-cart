import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

const Container = styled.div`
  margin: 0 auto;

  padding: 0 var(--s-4);

  @media ${DEVICES.TABLET} {
    max-width: 720px;
  }
  @media ${DEVICES.LAPTOP} {
    max-width: 960px;
  }
  @media ${DEVICES.DESKTOP} {
    max-width: 1140px;
  }
`;

export default { Container };
