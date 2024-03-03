import { create } from "zustand";

const useCartStore = create((set) => {
  const initialCart =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) || []
      : [];

  return {
    cart: initialCart,

    addToCart: (item) =>
      set((state) => {
        console.log(item);
        const existItem = state.cart.find(
          (cartItem) => cartItem.id === item.id
        );
        if (existItem) {
          console.log(existItem, "----");
          const updatedCart = state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? 
                  {
                    ...cartItem,
                    quantity: item.quantity,
                    totalPrice: item.totalPrice
                  }
                
              : cartItem
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return { cart: updatedCart };
        } else {
          // if(item.quantity === null || item.quantity === undefined){
          //   item.quantity =1
          // }
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

    clearCart: () => set({ cart: [] }),
  };
});

export default useCartStore;
