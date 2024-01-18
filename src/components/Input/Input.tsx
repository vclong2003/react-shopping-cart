import React from "react";
import * as S from "./Input.styled";

import { ClassAttributes, InputHTMLAttributes } from "react";

export default function Input(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>,
): JSX.Element {
  return <S.Input {...props} />;
}
