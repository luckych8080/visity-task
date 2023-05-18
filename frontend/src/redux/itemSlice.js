import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems, addItem, updateItem, deleteItem } from "./itemsAPI";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAsync = createAsyncThunk("items/fetchItem", async () => {
  const response = await fetchItems();
  return response.data.Items;
});

export const addAsync = createAsyncThunk("item/addItem", async (item) => {
  const { name, email, mobile } = item;
  const response = await addItem({ name, email, mobile });
  return response.data;
});

export const updateAsync = createAsyncThunk(
  "items/updateItem",
  async ({ id, itemUpdate }) => {
    const response = await updateItem(id, itemUpdate);
    return response.data;
  }
);

export const deleteAsync = createAsyncThunk("items/deleteItem", async (id) => {
  await deleteItem(id);
  return id;
});

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = "idle";

        const index = state.items.findIndex(
          (item) => item._id === action.payload
        );

        state.items.splice(index, 1);
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item._id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      });
  },
});

export default itemsSlice.reducer;
