import styled from "styled-components";
import commingSoon from "../../assets/images/comming_soon.png";

export const GlobalStyle = styled.div`
  background-image: url(${commingSoon});
  min-height: 60rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  width: 50%;
  height: auto;
  padding: var(--s-4) 0;
`;
