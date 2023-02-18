import { Box, Typography } from "@mui/material";
import { Timer1 } from "iconsax-react";
import React from "react";

const CustomChip = (props: { icon: React.ReactElement; text: string }) => {
  return (
    <Box
      sx={{
        px: 2,
        py: 0.75,
        bgcolor: "error.light",
        borderRadius: "30px",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        color: "error.main",
        gap: 1,
      }}
    >
      {props.icon}
      <Typography
        color="inherit"
        sx={{
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "-0.2px",
          userSelect: "none",
        }}
      >
        {props.text}
      </Typography>
    </Box>
  );
};

export default CustomChip;
