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
  vat: number;
  discount: number;
}

interface RemovedItemType {
  id: string;
  isDelete: boolean;
}

const initialState: CartStateType = {
  items: [],
  totalAmount: 100,
  totalNumberOfItems: 0,
  vat: 0,
  discount: 1,
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
        existingItem.totalPrice =
          Math.round(newItem.price * existingItem.quantity * 100) / 100;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: Math.round(newItem.price * newItem.quantity * 100) / 100,
          imgUrl: newItem.imgUrl,
        });
      }
      state.totalAmount = state.totalAmount + newItem.totalPrice;
      state.totalNumberOfItems += newItem.quantity;
      state.vat = Math.round(state.totalAmount * 0.05 * 100) / 100;
    },
    INCREASE_ITEM(state, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
        state.totalAmount += existingItem.price;
        state.totalNumberOfItems += 1;
      }
      state.vat = Math.round(state.totalAmount * 0.05 * 100) / 100;
    },
    REMOVE_ITEM(state, action: PayloadAction<RemovedItemType>) {
      const removedItem = action.payload;
      const id = removedItem.id;
      const isDelete = removedItem.isDelete;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (isDelete || existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
          state.totalAmount -= existingItem.totalPrice;
          state.totalNumberOfItems -= existingItem.quantity;
        } else {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
          state.totalAmount -= existingItem.price;
          state.totalNumberOfItems -= 1;
        }
      }
      state.vat = Math.round(state.totalAmount * 0.05 * 100) / 100;
    },
    ADD_DISCOUNT(state, action: PayloadAction<number>) {
      state.discount = action.payload;
    },
    REMOVE_DISCOUNT(state) {
      state.discount = 1;
    },
    CLEAR_CART(state) {
      state.items = [];
      state.totalAmount = 0;
      state.vat = 0;
      state.totalNumberOfItems = 0;
    },
  },
});

export const {
  ADD_ITEM,
  INCREASE_ITEM,
  REMOVE_ITEM,
  ADD_DISCOUNT,
  REMOVE_DISCOUNT,
  CLEAR_CART,
} = cartSlice.actions;
export default cartSlice.reducer;
