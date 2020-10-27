import { createSlice } from '@reduxjs/toolkit';
import assignKeyAs from "../../util/assignKeyAs";
import Label from "../../models/Label";
import {initialResponse} from "../../hooks/useApi";

export const labelsSlice = createSlice({
  name: 'labels',
  initialState: initialResponse,
  reducers: {
    set: (state, { payload: response }) => {
      return {
        ...response,
        data: response.data ? assignKeyAs(response.data, Label, 'name') : null
      }
    },
    add: (state, { payload: label }) => {
      state[label.name] = Label.create(label);
    }
  }
});

export const { set, add } = labelsSlice.actions;

export const selectLabels = state => state.labels;

export default labelsSlice.reducer;
