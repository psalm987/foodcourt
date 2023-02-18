import { Box } from "@mui/material";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LeftSection from "../component/Login/LeftSection";
import RightSection from "../component/Login/RightSection";
import { AuthContext } from "../context/auth/authContext";

const Login = () => {
  const { isLoggedIn } = useContext(AuthContext);
  
  if (isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}>
      <LeftSection />
      <RightSection />
    </Box>
  );
};

export default Login;
