import { ButtonHTMLAttributes, ClassAttributes } from "react";
import { JSX } from "react/jsx-runtime";

import S from "./Button.styled";

export default function Button(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLButtonElement> &
    ButtonHTMLAttributes<HTMLButtonElement>
): JSX.Element {
  return <S.Button {...props} />;
}