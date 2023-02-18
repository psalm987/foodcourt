import { Typography, TypographyProps } from "@mui/material";

const Body = (props: TypographyProps) => {
  return (
    <Typography
      component="p"
      sx={{
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "19px",
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default Body;
