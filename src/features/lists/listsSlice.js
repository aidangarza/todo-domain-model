import { createSlice } from '@reduxjs/toolkit';
import sample from './fixtures/ToDoList-sample';
import ToDoList from "../../models/ToDoList";
import uuid from "../../util/uuid";

export const listsSlice = createSlice({
  name: 'lists',
  initialState: {
    [sample.id]: sample
  },
  reducers: {
    add: state => {
      const id = uuid('todolist');
      state[id] = ToDoList.create({ id });
    },
    update: (state, { payload: list }) => {
      state[list.id] = ToDoList.create(list);
    }
  }
});

export const { add, update } = listsSlice.actions;

export const selectLists = state => state.lists;

export default listsSlice.reducer;
