export type ScaleKey =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type ColorScale =
  // make all value optional
  { [K in ScaleKey]?: string } &
    //makes union of all values of scaleKey as 1 value is required
    {
      [K in ScaleKey]: { [J in K]: string };
    }[ScaleKey];
