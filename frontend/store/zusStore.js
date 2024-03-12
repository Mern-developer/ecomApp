import { create } from "zustand";

const useCartStore = create((set) => {
  const initialCart =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) || []
      : [];
  const initialUserId =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userId")) || ""
      : "";

  return {
    cart: initialCart,
    userId: initialUserId,
    addToCart: (item) =>
      set((state) => {
        const existItem = state.cart.find((cartItem) => cartItem.id === item.id);
        if (existItem) {
          const updatedCart = state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  quantity: item.quantity,
                  totalPrice: item.totalPrice,
                }
              : cartItem
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        } else {
          const updatedCart = [...state.cart, item];
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        }
      }),

    removeFromCart: (itemId) =>
      set((state) => {
        const updatedCart = state.cart.filter((item) => item.id !== itemId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      }),

    keepUserId: (item) =>
      set((state) => {
        const updatedUser = item; // Use spread to update existing values
        localStorage.setItem("userId", JSON.stringify(updatedUser));
        return { userId: updatedUser };
      }),

    clearCart: () => set({ cart: [] }),
  };
});

export default useCartStore;
