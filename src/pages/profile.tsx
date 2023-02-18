import { Box, Container, Typography, useTheme } from "@mui/material";
import CustomAppBar from "../component/Profile/CustomAppBar";
import LeftSection from "../component/Profile/LeftSection";
import RightSection from "../component/Profile/RightSection";

const Profile = () => {
  const theme = useTheme();
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <CustomAppBar />
      <Container
        sx={{
          maxWidth: "1320px",
          height: "100%",
          pt: 2,
          pb: 5,
          display: "flex",
          flexDirection: "row",
          flexGrow: 1,
          gap: 5,
        }}
      >
        <LeftSection />
        <RightSection />
      </Container>
    </Box>
  );
};

export default Profile;
