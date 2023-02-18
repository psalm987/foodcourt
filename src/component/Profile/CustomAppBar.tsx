import { Box, Container, useTheme } from "@mui/material";
import Logo from "../Logo";

const CustomAppBar = () => {
  const theme = useTheme();
  return (
    <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}}` }}>
      <Container sx={{ maxWidth: "1320px" }}>
        <Logo />
      </Container>
    </Box>
  );
};

export default CustomAppBar;
