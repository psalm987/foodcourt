import { Box, Skeleton, useTheme } from "@mui/material";
import { COLORS } from "../theme/constant";

const CustomAvatar = (props: { children: string; loading?: boolean }) => {
  const theme = useTheme();
  if (props.loading) {
    return <Skeleton variant="circular" height={70} width={70} />;
  }
  return (
    <Box
      sx={{
        bgcolor: "primary.light",
        height: "70px",
        width: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "primary.main",
        borderRadius: 70,
        border: `2px solid ${theme.palette.background.paper}`,
        boxShadow: `0px 0px 0px 1px ${COLORS.border[4]}`,
        fontWeight: 500,
        fontSize: "24px",
        lineHeight: "33px",
        letterSpacing: "-0.5px",
        userSelect: "none",
      }}
    >
      {props.children}
    </Box>
  );
};

export default CustomAvatar;
