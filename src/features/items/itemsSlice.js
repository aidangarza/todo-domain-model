import { createSlice } from '@reduxjs/toolkit';
import Item from "../../models/Item";
import assignKeyAs from "../../util/assignKeyAs";
import {initialResponse} from "../../hooks/useApi";

export const itemsSlice = createSlice({
  name: 'items',
  initialState: initialResponse,
  reducers: {
    set: (state, { payload: response }) => {
      return {
        ...response,
        data: response.data ? assignKeyAs(response.data, Item) : null
      }
    },
    add: (state, { payload: item }) => {
      state.data[item.id] = Item.create(item);
    },
    remove: (state, { payload: item }) => {
      delete state.data[item.id];
    },
    update: (state, { payload: item }) => {
      state.data[item.id] = Item.create(item);
    }
  }
});

export const { set, add, update, remove } = itemsSlice.actions;

export const selectItems = state => state.items;

export default itemsSlice.reducer;
