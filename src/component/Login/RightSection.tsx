import {
  Box,
  Typography,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import { Eye } from "iconsax-react";
import CustomButton from "../../component/Form/CustomButton";
import CustomInput from "../../component/Form/CustomInput";
import LeftSection from "../../component/Login/LeftSection";
import H2 from "../../component/Typography/H2";
import Subtitle from "../../component/Typography/Subtitle";
import { COLORS } from "../../theme/constant";

const RightSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          maxWidth: "630px",
          width: "100%",
          px: 8,
          py: 5,
          boxShadow: "0px 4px 25px rgba(102, 102, 102, 0.2)",
          borderRadius: "12px",
        }}
      >
        <H2>Login to your dashboard</H2>
        <Subtitle sx={{ color: COLORS.text[2] }}>
          Provide details to login to your account{" "}
        </Subtitle>
        <Box
          component="form"
          action=""
          sx={{ display: "flex", flexDirection: "column", gap: 4, mt: 4 }}
        >
          <CustomInput label="Email" id="email" fullWidth />
          <CustomInput
            label="Password"
            id="password"
            type="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <Eye />
                </IconButton>
              </InputAdornment>
            }
            fullWidth
          />
          <CustomButton>Login</CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSection;
