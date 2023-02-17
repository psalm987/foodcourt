import { Button, ButtonProps } from "@mui/material";

const CustomButton = (props: ButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      {...props}
      sx={{
        borderRadius: "100px",
        textTransform: "none",
        py: "20px",
        ...props.sx,
      }}
    />
  );
};

export default CustomButton;
