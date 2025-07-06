import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = { id: number; title: string; price: number; image: string; qty: number };

interface CartState {
  items: CartItem[];
  add:  (item: CartItem) => void;
  remove: (id: number) => void;
  update: (id: number, qty: number) => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (item) =>
        set((s) => {
          const existing = s.items.find((i) => i.id === item.id);
          if (existing) existing.qty += item.qty;
          else s.items.push(item);
        }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      update: (id, qty) =>
        set((s) => {
          const p = s.items.find((i) => i.id === id);
          if (p) p.qty = qty;
        }),
      totalItems: () => get().items.reduce((sum, i) => sum + i.qty, 0),
      totalPrice: () => get().items.reduce((sum, i) => sum + i.qty * i.price, 0),
    }),
    { name: "wb-cart" }            // ← persisted in localStorage
  )
);
