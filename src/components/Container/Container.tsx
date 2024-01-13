import { ReactNode } from "react";
import S from "./Container.styled";

interface IContainerProps {
  children: ReactNode;
}

export default function Container({ children }: IContainerProps): JSX.Element {
  return <S.Container>{children}</S.Container>;
}
