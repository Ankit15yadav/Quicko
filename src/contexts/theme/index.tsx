import { getTheme, ThemeType } from "@src/theme";
import {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { useColorScheme } from "react-native";

interface IThemeContext {
  theme: ThemeType;
  toggleTheme: () => void;
  isLight: boolean;
}

interface IThemeProvider extends PropsWithChildren {}

export const themeContext = createContext<IThemeContext | null>(null);
const ThemeContextProvider = themeContext.Provider;

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const systemScheme = useColorScheme();
  // Override lets the user manually toggle; null means "follow system"
  const [override, setOverride] = useState<"light" | "dark" | null>(null);

  const toggleTheme = useCallback(
    () =>
      setOverride((prev) => {
        if (prev !== null) return prev === "light" ? "dark" : "light";
        return systemScheme === "light" ? "dark" : "light";
      }),
    [systemScheme],
  );

  const resolvedScheme = override ?? systemScheme ?? "light";
  const isLight = resolvedScheme === "light";

  const value = useMemo<IThemeContext>(
    () => ({ theme: getTheme(resolvedScheme), isLight, toggleTheme }),
    [resolvedScheme, isLight, toggleTheme],
  );

  return <ThemeContextProvider value={value}>{children}</ThemeContextProvider>;
};

export const useTheme = () => {
  const ctx = useContext(themeContext);

  if (!ctx)
    throw new Error("useThemeContext must be used inside ThemeProvider");
  return ctx;
};
