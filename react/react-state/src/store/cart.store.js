import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      carts: [],

      add_to_cart: function (item) {
        set((state) => ({
          carts: [...state.carts, item],
        }));
      },

      remove_from_cart: function (id) {
        set((state) => ({
          carts: state.carts.filter((item) => item.id !== id),
        }));
      },

      reset_cart: function () {
        set({ carts: [] });
      },
    }),
    {
      name: "carts",
    }
  )
);
