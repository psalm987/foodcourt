import { Box, BoxProps } from "@mui/material";
import LogoSrc from "../assets/png/logo.png";

const Logo = (props: BoxProps) => {
  return (
    <Box
      component="img"
      src={LogoSrc}
      alt="Logo"
      sx={{ height: "84px", ...props.sx }}
    />
  );
};

export default Logo;
