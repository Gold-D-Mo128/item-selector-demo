import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, ItemsState } from "../types/types";
import { mockItems, initialSelectedItems } from "../data/mockData";

const initialState: ItemsState = {
  allItems: mockItems,
  selectedItems: initialSelectedItems,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    // Set selected items (used when saving from dialog)
    setSelectedItems: (state, action: PayloadAction<Item[]>) => {
      state.selectedItems = action.payload;
    },

    // Add a single item to selected items
    addSelectedItem: (state, action: PayloadAction<Item>) => {
      if (
        state.selectedItems.length < 3 &&
        !state.selectedItems.some((item) => item.id === action.payload.id)
      ) {
        state.selectedItems.push(action.payload);
      }
    },

    // Remove a single item from selected items
    removeSelectedItem: (state, action: PayloadAction<number>) => {
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { setSelectedItems, addSelectedItem, removeSelectedItem } =
  itemsSlice.actions;
export default itemsSlice.reducer;
