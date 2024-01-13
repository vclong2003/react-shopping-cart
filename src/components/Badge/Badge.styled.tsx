import styled from "styled-components";

const BadgeContainer = styled.div`
  position: relative;
`;

const Badge = styled.span`
  position: absolute;
  top: calc(var(--s-2) * -1);
  right: calc(var(--s-2) * -1);

  width: var(--s-5);
  height: var(--s-5);

  font-size: var(--fs-xs);
  color: var(--white);
  background-color: var(--red);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
`;

const S = { BadgeContainer, Badge };
export default S;
