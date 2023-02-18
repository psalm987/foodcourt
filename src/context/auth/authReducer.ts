import {
  AuthProps,
  CLEAR_ERROR,
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL,
  LOGOUT,
} from "../types";

export const authReducer = (
  state: AuthProps,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL: {
      return { ...state, isLoggedIn: true, error: "" };
    }
    case LOGOUT: {
      return { ...state, isLoggedIn: false };
    }

    case LOGIN_FAILED: {
      return { ...state, isLoggedIn: false, error: "Invalid credentials" };
    }
    case CLEAR_ERROR: {
      return { ...state, error: "" };
    }
    default: {
      return state;
    }
  }
};
