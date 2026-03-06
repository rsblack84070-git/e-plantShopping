import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      console.log("Adding item to cart:", action.payload);
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      console.log("Removing item from cart:", action.payload);
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        state.items = state.items.filter((i) => i.name !== item.name);
      }
    },
    updateQuantity: (state, action) => {
      console.log("Updating item quantity in cart:", action.payload);
      const { name, quantity } = action.payload;
      const item = state.items.find((i) => i.name === name);
      item.quantity = quantity;
      if (item.quantity === 0) {
        state.items = state.items.filter((i) => i.name !== name);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;