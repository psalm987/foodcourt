import { Box, Typography, useTheme } from "@mui/material";
import { TickCircle } from "iconsax-react";
import React from "react";
import { COLORS } from "../theme/constant";
import Body from "./Typography/Body";
import Subtitle from "./Typography/Subtitle";

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
        <Subtitle
          sx={{
            fontWeight: 500,
            letterSpacing: "-0.3px",
            pb: 0.5,
            color: props.active ? "text.primary" : COLORS.text[2],
          }}
        >
          {props.heading}
        </Subtitle>
        <Body
          sx={{
            color: props.active ? COLORS.text[3] : COLORS.text[1],
          }}
        >
          {props.body}
        </Body>
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

export const LoadingIconListItem = (props: { icon: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 2,
      }}
    >
      <Box
        sx={{
          bgcolor: COLORS.loading[1],
          height: "45px",
          width: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          fontSize: "24px",
          userSelect: "none",
        }}
      >
        {props.icon}
      </Box>
      <Box width="100%">
        <Box
          sx={{
            bgcolor: COLORS.loading[1],
            height: "14px",
            width: "100%",
            maxWidth: "194px",
            borderRadius: 0.5,
            mb: 1,
          }}
        />
        <Box
          sx={{
            bgcolor: COLORS.loading[1],
            height: "14px",
            width: "100%",
            maxWidth: "132px",
            borderRadius: 0.5,
          }}
        />
      </Box>
    </Box>
  );
};

export default IconListItem;
