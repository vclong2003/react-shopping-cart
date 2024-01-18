import styled from "styled-components";
import commingSoon from "../../assets/images/comming_soon.png";

export const GlobalStyle = styled.div`
  background-image: url(${commingSoon});
  min-height: 60rem;
  background-size: cover;
  background-repeat: no-repeat;
  padding: var(--s-4) 0;
`;
