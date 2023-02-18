import { Box, Skeleton } from "@mui/material";
import React from "react";
import { COLORS } from "../theme/constant";
import Body from "./Typography/Body";
import Subtitle from "./Typography/Subtitle";

const TextListItem = (props: {
  primary: string;
  secondary: string;
  loading?: boolean;
}) => {
  if (props.loading) {
    return (
      <Box>
        <Skeleton variant="text" height={20} />
        <Skeleton variant="text" height={30} />
      </Box>
    );
  }
  return (
    <Box>
      <Body sx={{ color: COLORS.text[2] }}>{props.secondary}</Body>
      <Subtitle sx={{ color: "text.primary" }}>{props.primary}</Subtitle>
    </Box>
  );
};

export default TextListItem;
