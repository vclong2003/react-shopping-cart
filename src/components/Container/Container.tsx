import { ClassAttributes, HTMLAttributes } from "react";
import S from "./Container.styled";

export default function Container(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
): JSX.Element {
  return <S.Container {...props} />;
}
