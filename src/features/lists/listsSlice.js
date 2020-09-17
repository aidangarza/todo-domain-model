import { createSlice } from '@reduxjs/toolkit';
import sample from './fixtures/List-sample';
import List from "../../models/List";
import uuid from "../../util/uuid";

export const listsSlice = createSlice({
  name: 'lists',
  initialState: {
    [sample.id]: sample
  },
  reducers: {
    add: state => {
      const id = uuid('todolist');
      state[id] = List.create({ id });
    },
    update: (state, { payload: list }) => {
      state[list.id] = List.create(list);
    }
  }
});

export const { add, update } = listsSlice.actions;

export const selectLists = state => state.lists;

export default listsSlice.reducer;
