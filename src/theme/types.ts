// colors/type.ts
import { light } from "./colors/light";
import type { ColorScale } from "./colors/scales";

export type PaletteType = {
  green: ColorScale;
  gray: ColorScale;
  red: ColorScale;
  amber: ColorScale;
  white: string;
  black: string;
};

type MapString<T> = T extends string
  ? string
  : { [K in keyof T]: MapString<T[K]> };
export type ThemeType = MapString<typeof light>;
