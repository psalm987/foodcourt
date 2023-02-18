import React from "react";
import { AuthContextProps, AuthProps } from "../types";

export const authInit: AuthProps = {
  database: {
    email: import.meta.env.VITE_DATABASE_EMAIL,
    password: import.meta.env.VITE_DATABASE_PASSWORD,
  },
  isLoggedIn: false,
  error: "",
};

export const AuthContext = React.createContext<AuthContextProps>(authInit);
