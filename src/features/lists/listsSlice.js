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
    add: (state, { payload: list }) => {
      state.data[list.id] = List.create(list);
    },
    remove: (state, { payload: list }) => {
      delete state.data[list.id];
    },
    update: (state, { payload: list }) => {
      state.data[list.id] = List.create(list);
    }
  }
});

export const { set, add, remove, update } = listsSlice.actions;

export const selectLists = state => state.lists;

export default listsSlice.reducer;
