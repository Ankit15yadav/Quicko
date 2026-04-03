// colors/index.ts
import { ThemeType } from "../types";
import { dark } from "./dark";
import { light } from "./light";

export const Colors = {
  light: light satisfies ThemeType,
  dark: dark satisfies ThemeType,
} as const;

export type { ThemeType };

