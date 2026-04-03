// colors/light.ts
import { palette } from "../palette";

export const light = {
  bg: {
    primary: palette.white,
    secondary: palette.gray[100],
    tertiary: palette.gray[200],
    inverse: palette.gray[900],
  },

  text: {
    primary: palette.gray[900],
    secondary: palette.gray[500],
    disabled: palette.gray[400],
    inverse: palette.white,
  },

  brand: {
    primary: palette.green[500],
    secondary: palette.green[100],
    muted: palette.green[50],
  },

  logo: {
    primary: palette.yellow[100],
  },

  status: {
    error: palette.red[100],
    success: palette.green[500],
    warning: palette.amber,
  },

  white: {
    primary: palette.white,
  },

  border: palette.gray[200],
  transparent: "transparent" as const,
} as const;
