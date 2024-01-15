import * as S from "./Badge.styled";

interface IBadgeProps {
  count: number;
  children: React.ReactNode;
}

export default function Badge({ count, children }: IBadgeProps): JSX.Element {
  return (
    <S.BadgeContainer>
      <S.Badge $hidden={count === 0}>{count}</S.Badge>
      <div style={{ position: "relative" }}>{children}</div>
    </S.BadgeContainer>
  );
}
