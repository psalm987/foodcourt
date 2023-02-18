import React from "react";
import {
  AuthProps,
  CLEAR_ERROR,
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL,
  LOGOUT,
} from "../types";
import { AuthContext, authInit } from "./authContext";
import { authReducer } from "./authReducer";

const AuthProvider = (
  props: { children: React.ReactElement },
  ...rest: any
) => {
  const [state, dispatch] = React.useReducer(authReducer, authInit);

  React.useEffect(() => {
    let timer: any;
    if (state.isLoggedIn) {
      timer = setTimeout(() => {
        logout();
      }, 2 * 60 * 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [state.isLoggedIn]);

  function login(email: string, password: string) {
    if (
      email.toLowerCase() === state?.database?.email?.toLowerCase?.() &&
      password === state?.database?.password
    ) {
      dispatch({ type: LOGIN_SUCCESSFUL });
    } else {
      dispatch({ type: LOGIN_FAILED });
    }
  }

  function logout() {
    dispatch({ type: LOGOUT });
  }
  function clearError() {
    dispatch({ type: CLEAR_ERROR });
  }

  return (
    <AuthContext.Provider
      value={{
        database: state.database,
        isLoggedIn: state.isLoggedIn,
        error: state.error,
        login,
        logout,
        clearError,
      }}
      {...rest}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
