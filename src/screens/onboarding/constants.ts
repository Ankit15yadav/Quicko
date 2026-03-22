import { RadialGlowProps } from "../../components/radio-glow";

export const RADIAL_GLOWS: RadialGlowProps[] = [
  {
    size: 200,
    color: "rgba(48,180,48,0.07)",
    delay: 0,
  },
  {
    size: 160,
    color: "rgba(51, 161, 101, 0.06)",
    delay: 600,
  },
  {
    size: 120,
    color: "rgba(250,204,21,0.04)",
    delay: 300,
  },
] as const;

// ─── Constants ────────────────────────────────────────────────────────────────
export const CHIP_ROWS = [
  [
    { emoji: "🥛", label: "Milk" },
    { emoji: "🍌", label: "Bananas" },
    { emoji: "💊", label: "Medicines" },
    { emoji: "🥚", label: "Eggs" },
  ],
  [
    { emoji: "🧴", label: "Shampoo" },
    { emoji: "🍕", label: "Pizza" },
    { emoji: "☕", label: "Coffee" },
    { emoji: "🥗", label: "Salad" },
  ],
  // [
  //   { emoji: "🍞", label: "Bread" },
  //   { emoji: "🧈", label: "Butter" },
  //   { emoji: "🧀", label: "Cheese" },
  //   { emoji: "🍎", label: "Apples" },
  // ],
  // [
  //   { emoji: "🍚", label: "Rice" },
  //   { emoji: "🍝", label: "Pasta" },
  //   { emoji: "🍗", label: "Chicken" },
  //   { emoji: "🐟", label: "Fish" },
  // ],
  // [
  //   { emoji: "🧼", label: "Soap" },
  //   { emoji: "🪥", label: "Toothbrush" },
  //   { emoji: "🪒", label: "Razor" },
  //   { emoji: "🧻", label: "Toilet Paper" },
  // ],
  // [
  //   { emoji: "🥤", label: "Soft Drink" },
  //   { emoji: "🍔", label: "Burger" },
  //   { emoji: "🍟", label: "Fries" },
  //   { emoji: "🍰", label: "Cake" },
  // ],
];

export const TICKER_ITEMS = [
  "⚡ 10-min delivery",
  "🛒 10,000+ products",
  "🆓 Free on first order",
  "📦 No minimum order",
  "🌙 Open till midnight",
  "💚 Fresh & quality guaranteed",
];

export interface MarqueeItem {
  id: string;
  emoji: string;
  label: string;
  bg: string;
}

export const ROW_1: MarqueeItem[] = [
  { id: "milk", emoji: "🥛", label: "Milk", bg: "#1C2B3A" },
  { id: "fruits", emoji: "🍎", label: "Fruits", bg: "#2B1A1A" },
  { id: "juices", emoji: "🧃", label: "Juices", bg: "#1A2B1A" },
  { id: "eggs", emoji: "🥚", label: "Eggs", bg: "#2B2820" },
  { id: "dairy", emoji: "🧈", label: "Dairy", bg: "#2B251A" },
  { id: "veggies", emoji: "🥦", label: "Veggies", bg: "#1A2B22" },
  { id: "bakery", emoji: "🍞", label: "Bakery", bg: "#2B2218" },
];

export const ROW_2: MarqueeItem[] = [
  { id: "skincare", emoji: "🧴", label: "Skincare", bg: "#281A2B" },
  { id: "medicines", emoji: "💊", label: "Medicines", bg: "#1A1A2B" },
  { id: "cleaning", emoji: "🧹", label: "Cleaning", bg: "#1A2B28" },
  { id: "snacks", emoji: "🍫", label: "Snacks", bg: "#2B1E1A" },
  { id: "meat", emoji: "🥩", label: "Meat", bg: "#2B1A1E" },
  { id: "staples", emoji: "🫙", label: "Staples", bg: "#22221A" },
  { id: "noodles", emoji: "🍜", label: "Noodles", bg: "#2B2018" },
];

export const ROW_3: MarqueeItem[] = [
  { id: "icecream", emoji: "🧊", label: "Ice Cream", bg: "#1A2428" },
  { id: "beverages", emoji: "🫧", label: "Beverages", bg: "#1A1E2B" },
  { id: "petcare", emoji: "🐾", label: "Pet Care", bg: "#221A2B" },
  { id: "plants", emoji: "🪴", label: "Plants", bg: "#1A2B1A" },
  { id: "electronics", emoji: "🔋", label: "Electronics", bg: "#1A1A1A" },
  { id: "gaming", emoji: "🎮", label: "Gaming", bg: "#1A1A2B" },
  { id: "laundry", emoji: "🧺", label: "Laundry", bg: "#1E1A2B" },
];

export const MARQUEE_ROWS = [ROW_1, ROW_2, ROW_3];
