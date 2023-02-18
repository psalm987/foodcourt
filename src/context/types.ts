export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";
export const CLEAR_ERROR = "CLEAR_ERROR";

export interface AuthProps {
  database: {
    email: string;
    password: string;
  };
  isLoggedIn: boolean;
  error: string | null;
}

export interface AuthContextProps extends AuthProps {
  login?: (email: string, password: string) => void;
  logout?: () => void;
  clearError?: () => void;
}
