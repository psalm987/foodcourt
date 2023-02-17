import { Box } from "@mui/material";
import LeftSection from "../component/Login/LeftSection";
import RightSection from "../component/Login/RightSection";

const Login = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", minHeight: "100vh" }}>
      <LeftSection />
      <RightSection />
    </Box>
  );
};

export default Login;
