import { Box, IconButton, InputAdornment } from "@mui/material";
import { Eye, EyeSlash } from "iconsax-react";
import React, { useContext } from "react";
import CustomButton from "../../component/Form/CustomButton";
import CustomInput from "../../component/Form/CustomInput";
import H2 from "../../component/Typography/H2";
import Subtitle from "../../component/Typography/Subtitle";
import { AuthContext } from "../../context/auth/authContext";
import { COLORS } from "../../theme/constant";

const RightSection = () => {
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const [visibility, setVisibility] = React.useState(false);
  const { login, error, clearError } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearError?.();
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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
          my: 5,
          mx: { xs: 2, md: 5 },
          px: { xs: 3, sm: 5, lg: 8 },
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
          <CustomInput
            value={formData.email}
            helperText={error?.toString()}
            onChange={handleChange}
            label="Email"
            id="email"
            fullWidth
          />
          <CustomInput
            label="Password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            type={visibility ? "text" : "password"}
            endAdornment={
              <InputAdornment
                position="end"
                onClick={() =>
                  setVisibility((prevVisibility) => !prevVisibility)
                }
              >
                <IconButton>{visibility ? <EyeSlash /> : <Eye />}</IconButton>
              </InputAdornment>
            }
            fullWidth
          />
          <CustomButton
            onClick={() => login?.(formData.email, formData.password)}
          >
            Login
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSection;
