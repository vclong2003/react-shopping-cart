import S from "./OffCanvas.styled";

interface IOffCanvasProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function OffCanvas({
  show,
  onClose,
  children,
}: IOffCanvasProps): JSX.Element {
  return (
    <S.Overlay $show={show}>
      <S.OffCanvas>{children}</S.OffCanvas>
      <S.Backdrop onClick={onClose} />
    </S.Overlay>
  );
}
