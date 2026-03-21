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
  [
    { emoji: "🍞", label: "Bread" },
    { emoji: "🧈", label: "Butter" },
    { emoji: "🧀", label: "Cheese" },
    { emoji: "🍎", label: "Apples" },
  ],
  [
    { emoji: "🍚", label: "Rice" },
    { emoji: "🍝", label: "Pasta" },
    { emoji: "🍗", label: "Chicken" },
    { emoji: "🐟", label: "Fish" },
  ],
  [
    { emoji: "🧼", label: "Soap" },
    { emoji: "🪥", label: "Toothbrush" },
    { emoji: "🪒", label: "Razor" },
    { emoji: "🧻", label: "Toilet Paper" },
  ],
  [
    { emoji: "🥤", label: "Soft Drink" },
    { emoji: "🍔", label: "Burger" },
    { emoji: "🍟", label: "Fries" },
    { emoji: "🍰", label: "Cake" },
  ],
];

export const TICKER_ITEMS = [
  "⚡ 10-min delivery",
  "🛒 10,000+ products",
  "🆓 Free on first order",
  "📦 No minimum order",
  "🌙 Open till midnight",
  "💚 Fresh & quality guaranteed",
];
