import { Typography } from "@mui/material";
import { SxProps } from "@mui/system";

interface ILogoProps {
  sx?: SxProps;
}

export default function Logo({ sx }: ILogoProps): JSX.Element {
  return (
    <Typography
      sx={{
        textAlign: "center",
        fontSize: "var(--fs-2xl)",
        flexGrow: 1,
        fontWeight: 700,
        color: "var(--white)",
        ...sx,
      }}>
      LOGO
    </Typography>
  );
}
