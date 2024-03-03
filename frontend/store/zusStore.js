import { create } from "zustand";

const useCartStore = create((set) => {
  const initialCart =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart")) || []
      : [];
  const initialUserId =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userId")) || ''
      : '';

  return {
    cart: initialCart,
    userId: initialUserId,
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
      keepUserId: (item)=> set((state)=>{
        const updateUser = state.userId = item;
        localStorage.setItem('userId', JSON.stringify(updateUser))
        return { updateUser}
      }),
    clearCart: () => set({ cart: [] }),
  };
});

export default useCartStore;
