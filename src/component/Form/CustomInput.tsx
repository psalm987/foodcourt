import * as React from "react";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import { COLORS } from "../../theme/constant";
import {
  FormHelperText,
  FormLabel,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";

interface CustomInputProps extends OutlinedInputProps {
  helperText?: string;
}

const BootstrapInput = styled(OutlinedInput)(({ theme }) => ({
  "label + &": {},
  "&.MuiOutlinedInput-root": {
    borderRadius: "8px",
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: "16px",
    fontWeight: 400,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "& *": {
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
    },
    "&.Mui-focused": {
      boxShadow: `${COLORS.border[3]} 0 0 0 0.2rem`,
      //   borderColor: theme.palette.text.primary,
    },
    "&.Mui-focused fieldset, &:hover fieldset": {
      borderColor: theme.palette.text.primary,
    },
    "&>input": {
      padding: "20px",
    },
  },
}));

export default function CustomInput(props: CustomInputProps) {
  const { label, helperText, ...inputProps } = props;
  return (
    <FormControl variant="standard" fullWidth={inputProps.fullWidth}>
      <FormLabel
        htmlFor={inputProps.id}
        sx={{
          color: "text.primary",
          fontSize: "16px",
          mb: "12px",
          "&.Mui-focused": { color: "text.primary" },
        }}
      >
        {label}
      </FormLabel>
      <BootstrapInput {...inputProps} />
      <FormHelperText error>{helperText}</FormHelperText>
    </FormControl>
  );
}
