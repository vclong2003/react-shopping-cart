import { ClassAttributes, InputHTMLAttributes } from "react";

import S from "./Input.styled";

export default function Input(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>
): JSX.Element {
  return <S.Input {...props} />;
}
