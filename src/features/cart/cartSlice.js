import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.value += 1;
    },
    removeFromCart: (state) => {
      state.value -= 1;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.value;

export default cartSlice.reducer;
