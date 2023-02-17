import { Box, Typography, useTheme } from "@mui/material";
import { TickCircle } from "iconsax-react";
import React from "react";
import { COLORS } from "../theme/constant";

interface IconListItemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  heading: string;
  body: string;
  active?: boolean;
}

const IconListItem = (props: IconListItemProps) => {
  const Icon = props.icon;
  const theme = useTheme();
  return (
    <Box
      sx={{
        px: 1.375,
        py: 1.25,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        bgcolor: props.active ? "warning.light" : undefined,
        borderRadius: 2.5,
      }}
    >
      <Icon height={75} width={75} />
      <Box
        sx={{
          ml: 2.5,
          width: "100%",
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "25px",
            letterSpacing: "-0.3px",
            pb: 0.5,
            color: props.active ? "text.primary" : COLORS.text[2],
          }}
        >
          {props.heading}
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "19px",
            color: props.active ? COLORS.text[3] : COLORS.text[1],
          }}
        >
          {props.body}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80px",
          display: "flex",
          justifyContent: "flex-end",
          p: 1,
        }}
      >
        {props.active && (
          <TickCircle color={theme.palette.warning.main} size="20px" />
        )}
      </Box>
    </Box>
  );
};

export default IconListItem;
