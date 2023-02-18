import React from "react";
import { AuthContextProps, AuthProps } from "../types";

export const authInit: AuthProps = {
  database: {
    email: "foodcourt@test.com",
    password: "test",
  },
  isLoggedIn: false,
  error: "",
};

export const AuthContext = React.createContext<AuthContextProps>(authInit);
