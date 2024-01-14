import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

const Container = styled.div`
  width: 100%;

  margin: 0 auto;

  padding-left: var(--s-3);
  padding-right: var(--s-3);

  @media ${DEVICES.PHONE} {
    max-width: 540px;
  }
  @media ${DEVICES.PHONE_L} {
    max-width: 720px;
  }
  @media ${DEVICES.TABLET} {
    max-width: 960;
  }
  @media ${DEVICES.DESKTOP} {
    max-width: 1140px;
  }
  @media ${DEVICES.DESKTOP_L} {
    max-width: 1320px;
  }
`;

export { Container };
