import { ColorSchemeName } from "react-native";
import { Colors, ThemeType } from "./colors";

export const getTheme = (scheme: ColorSchemeName) => {
  return scheme === "dark" ? Colors.dark : Colors.light;
};

export type { ThemeType };

