import { Box, Container } from "@mui/material";
import { COLORS } from "../../theme/constant";
import CustomAvatar from "../CustomAvatar";
import TextListItem from "../TextListItem";
import H2 from "../Typography/H2";

const LeftSection = () => {
  return (
    <Box
      sx={{
        border: `1px solid ${COLORS.border[1]}`,
        py: 7,
        width: "100%",
        borderRadius: "12px",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <CustomAvatar>CN</CustomAvatar>
          <H2>COMPANY NAME</H2>
        </Box>
        <Box sx={{ mt: 6, display: "flex", flexDirection: "column", gap: 3 }}>
          <TextListItem primary="CEO NAME" secondary="CEO" />
          <TextListItem primary="CTO NAME" secondary="CTO" />
        </Box>
      </Container>
    </Box>
  );
};

export default LeftSection;
