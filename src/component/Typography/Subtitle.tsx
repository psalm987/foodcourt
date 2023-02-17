import { Typography, TypographyProps } from "@mui/material";
import React from "react";

const Subtitle = (props: TypographyProps) => {
  return (
    <Typography
      component="p"
      sx={{
        color: "text.secondary",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "25px",
        letterSpacing: "0.3px",
        pb: 1,
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default Subtitle;
