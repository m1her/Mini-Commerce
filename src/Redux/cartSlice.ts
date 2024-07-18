import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ItemType {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
  totalPrice: number;
}

interface CartStateType {
  items: ItemType[];
  totalAmount: number;
  totalNumberOfItems: number;
}

const initialState: CartStateType = {
  items: [],
  totalAmount: 0,
  totalNumberOfItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_ITEM(state, action: PayloadAction<ItemType>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice = newItem.price * existingItem.quantity;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          imgUrl: newItem.imgUrl,
        });
      }
      state.totalAmount += newItem.totalPrice;
      state.totalNumberOfItems += newItem.quantity;
    },
    REMOVE_ITEM(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
        }
        state.totalAmount -= existingItem.price;
      }
    },
    CLEAR_CART(state) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } = cartSlice.actions;
export default cartSlice.reducer;
