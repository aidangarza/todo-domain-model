import { createSlice } from '@reduxjs/toolkit';
import sample from './fixtures/Items-sample';
import uuid from "../../util/uuid";
import Item from "../../models/Item";

export const itemsSlice = createSlice({
  name: 'items',
  initialState: sample.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  reducers: {
    add: (state, { payload: item }) => {
      const id = uuid('todoitem');
      state[id] = Item.create({ ...item, id });
    },
    update: (state, { payload: item }) => {
      state[item.id] = Item.create({
        ...state[item.id],
        ...item
      });
    }
  }
});

export const { add, update } = itemsSlice.actions;

export const selectListItems = listId => state => Object.values(state.items).filter(item => item.listId === listId);

export default itemsSlice.reducer;
