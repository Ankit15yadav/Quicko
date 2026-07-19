import { ValidateToken } from "@src/services/operations/auth";
import { useRouter } from "expo-router";
import * as secureStorage from "expo-secure-store";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { IUser } from "./interface";

interface AuthContextType {
  user: IUser | null;
  isLoading: boolean;
  logout: () => Promise<void>;
  dispatch: React.Dispatch<AuthAction>;
  isAuthenticated: boolean;
}

interface AuthState {
  user: IUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

type AuthAction =
  | { type: "SET_USER"; payload: IUser | null }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_AUTHENTICATION_STATUS"; payload: boolean }
  | { type: "LOGOUT" };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_AUTHENTICATION_STATUS":
      return { ...state, isAuthenticated: action.payload };
    case "LOGOUT":
      return { user: null, isAuthenticated: false, isLoading: false };
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { dismissAll, push, replace } = useRouter();
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  const initializeAuth = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const accessToken = await secureStorage.getItemAsync("accessToken");
      const refreshToken = await secureStorage.getItemAsync("refreshToken");
      console.log("initialzie auth: ", accessToken, refreshToken);
      if (!accessToken && !refreshToken) {
        dispatch({ type: "SET_USER", payload: null });
        replace("/(onboarding)/send-otp");
        return;
      }
      // This will get the fresh access token if expired before app starts.
      await ValidateToken();
      // token is valid
      dispatch({ type: "SET_AUTHENTICATION_STATUS", payload: true });
      push("/");
    } catch (error) {
      console.error("Auth initialization error:", error);
      await logout();
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const logout = async () => {
    await secureStorage.deleteItemAsync("accessToken");
    await secureStorage.deleteItemAsync("refreshToken");
    dispatch({ type: "LOGOUT" });
    dismissAll();
    push("/(onboarding)/send-otp");
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoading: state.isLoading,
        isAuthenticated: state.isAuthenticated,
        logout,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
