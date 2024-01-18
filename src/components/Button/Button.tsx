import React from "react";
import * as S from "./Button.styled";

import { ButtonHTMLAttributes, ClassAttributes } from "react";

export default function Button(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLButtonElement> &
    ButtonHTMLAttributes<HTMLButtonElement>,
): JSX.Element {
  return <S.Button {...props} />;
}
