import { createSlice } from '@reduxjs/toolkit';
import uuid from "../../util/uuid";
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
      const id = uuid('item');
      state.data[id] = Item.create({ ...item, id });
    },
    update: (state, { payload: item }) => {
      state[item.id] = Item.create({
        ...state[item.id],
        ...item
      });
    }
  }
});

export const { set, add, update } = itemsSlice.actions;

export const selectItems = state => state.items;

export default itemsSlice.reducer;
