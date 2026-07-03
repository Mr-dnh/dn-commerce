import { CartState } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const { items } = get();
        const existingItem = items.find(
          (item) => item.product_id === product.product_id
        );

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.product_id === product.product_id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { ...product, quantity: 1 }],
          });
        }
      },

      removeItem: (product_id) => {
        set({
          items: get().items.filter((item) => item.product_id !== product_id),
        });
      },

      updateQuantity: (product_id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(product_id);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.product_id === product_id ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
          return total + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: "cart-storage", // ذخیره در localStorage
    }
  )
);
