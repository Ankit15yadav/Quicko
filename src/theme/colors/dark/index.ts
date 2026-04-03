// colors/dark.ts
import { palette } from "../palette";

export const dark = {
  bg: {
    primary: palette.gray[800],
    secondary: "#62626C",
    tertiary: palette.gray[600],
    inverse: palette.white,
  },
  text: {
    primary: palette.white,
    secondary: palette.gray[300],
    disabled: palette.gray[400],
    inverse: palette.gray[900],
  },
  brand: {
    primary: palette.green[500],
    secondary: palette.green[100],
    muted: "#1a3d1f",
  },

  logo: {
    primary: palette.yellow[100],
  },

  white: {
    primary: palette.white,
  },
  status: {
    error: palette.red[100],
    success: palette.green[500],
    warning: palette.amber,
  },
  border: "#3a3a3a",
  transparent: "transparent" as const,
} as const;
