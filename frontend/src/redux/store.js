import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../redux/itemSlice";
export const store = configureStore({
  reducer: {
    item: itemsReducer,
  },
});
