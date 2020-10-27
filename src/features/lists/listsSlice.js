import { createSlice } from '@reduxjs/toolkit';
import List from "../../models/List";
import uuid from "../../util/uuid";
import {initialResponse} from "../../hooks/useApi";
import assignKeyAs from "../../util/assignKeyAs";

export const listsSlice = createSlice({
  name: 'lists',
  initialState: initialResponse,
  reducers: {
    set: (state, { payload: response }) => {
      return {
        ...response,
        data: response.data ? assignKeyAs(response.data, List) : null
      }
    },
    add: state => {
      const id = uuid('todolist');
      state.data[id] = List.create({ id });
    },
    update: (state, { payload: list }) => {
      state.data[list.id] = List.create(list);
    }
  }
});

export const { set, add, update } = listsSlice.actions;

export const selectLists = state => state.lists;

export default listsSlice.reducer;
