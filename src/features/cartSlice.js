import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const pizza = action.payload;
      state.cartList.push(pizza);
      const priceToAdd = Number(pizza.selectedOption ? pizza.selectedOption.price : pizza.price);
      state.total += priceToAdd;

    },

    removeFromCart: (state, action) => {
      const pizzaId = action.payload;
      const pizzaToRemove = state.cartList.find(item => item.id === pizzaId);
      
      if (pizzaToRemove) {
        // Deduct the price of the removed item from the total
        state.total -= pizzaToRemove.selectedOption
          ? pizzaToRemove.selectedOption.price
          : pizzaToRemove.price;

        // Remove the pizza from the cartList
        state.cartList = state.cartList.filter(item => item.id !== pizzaId);
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
