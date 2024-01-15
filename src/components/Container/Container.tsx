import React from "react";
import { ClassAttributes, HTMLAttributes } from "react";
import * as S from "./Container.styled";

export default function Container(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
): JSX.Element {
  return <S.Container {...props} />;
}
