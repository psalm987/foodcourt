import { Typography, TypographyProps } from "@mui/material";

const H1 = (props: TypographyProps) => {
  return (
    <Typography
      component="h1"
      sx={{
        color: "text.primary",
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "48px",
        letterSpacing: "-0.5px",
        pb: 1,
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default H1;
