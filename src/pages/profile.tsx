import { Box, Container, Typography, useTheme } from "@mui/material";
import CustomAppBar from "../component/Profile/CustomAppBar";
import LeftSection from "../component/Profile/LeftSection";
import RightSection from "../component/Profile/RightSection";
import { AuthContext } from "../context/auth/authContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
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
          flexDirection: { xs: "column", md: "row" },
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
