import { createTheme, Theme } from "@mui/material/styles";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#1CC578",
      light: "#FEE7EA",
      contrastText: "#FFFFFF",
    },
    warning: {
      light: "#F8F8F6",
      main: "#F9C320",
    },
    background: {
      default: "#FEF0F2",
      paper: "#FFFFFF",
    },
    error: {
      main: "#E60A2B",
      light: "#FEEBEE",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#858585",
    },
    divider: "#DCE2EA",
  },
  typography: {
    fontFamily: "Manrope, sans-serif",
  },
});
