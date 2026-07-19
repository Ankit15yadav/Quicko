// store/cartStore.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  imageUrl?: string;
  quantity: number;
}

interface CartState {
  items: Record<string, CartItem>; // keyed by productId for O(1) lookup

  // reads
  getQuantity: (productId: string) => number;
  getItem: (productId: string) => CartItem | undefined;
  getTotalCount: () => number;
  getTotalPrice: () => number;
  getItemsAsArray: () => CartItem[];
  isEmpty: () => boolean;

  // writes
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: {},
      // ── Reads ──────────────────────────────────────────────────────────────

      getQuantity: (productId) => {
        return get().items[productId]?.quantity ?? 0;
      },

      getItem: (productId) => {
        return get().items[productId];
      },

      getTotalCount: () => {
        return Object.values(get().items).reduce(
          (sum, item) => sum + item.quantity,
          0,
        );
      },

      getTotalPrice: () => {
        return Object.values(get().items).reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );
      },

      getItemsAsArray: () => {
        return Object.values(get().items);
      },

      isEmpty: () => {
        return Object.keys(get().items).length === 0;
      },

      // ── Writes ─────────────────────────────────────────────────────────────

      addToCart: (item) => {
        set((state) => {
          const existing = state.items[item.productId];

          return {
            items: {
              ...state.items,
              [item.productId]: {
                ...item,
                quantity: existing ? existing.quantity + 1 : 1,
              },
            },
          };
        });
      },

      increment: (productId) => {
        set((state) => {
          const existing = state.items[productId];
          if (!existing) return state;

          return {
            items: {
              ...state.items,
              [productId]: {
                ...existing,
                quantity: existing.quantity + 1,
              },
            },
          };
        });
      },

      decrement: (productId) => {
        set((state) => {
          const existing = state.items[productId];
          if (!existing) return state;

          // remove item when quantity hits 0
          if (existing.quantity <= 1) {
            const { [productId]: _, ...rest } = state.items;
            return { items: rest };
          }

          return {
            items: {
              ...state.items,
              [productId]: {
                ...existing,
                quantity: existing.quantity - 1,
              },
            },
          };
        });
      },

      removeItem: (productId) => {
        set((state) => {
          const { [productId]: _, ...rest } = state.items;
          return { items: rest };
        });
      },

      clearCart: () => {
        set({ items: {} });
      },
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
