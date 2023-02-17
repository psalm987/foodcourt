import { Typography, TypographyProps } from "@mui/material";
import React from "react";

const H2 = (props: TypographyProps) => {
  return (
    <Typography
      component="h2"
      sx={{
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: "37px",
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default H2;
