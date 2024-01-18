import React from "react";
import * as S from "./Container.styled";

import { ClassAttributes, HTMLAttributes } from "react";

export default function Container(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>,
): JSX.Element {
  return <S.Container {...props} />;
}
