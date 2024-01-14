import styled from "styled-components";

const BadgeContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const Badge = styled.span`
  position: absolute;
  top: calc(var(--s-2) * -1);
  right: calc(var(--s-2) * -1);
  z-index: 1;

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

export { BadgeContainer, Badge };
