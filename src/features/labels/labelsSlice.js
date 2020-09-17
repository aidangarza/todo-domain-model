import { createSlice } from '@reduxjs/toolkit';
import sample from './fixtures/Labels-sample';
import Item from "../../models/Item";

export const labelsSlice = createSlice({
  name: 'labels',
  initialState: sample.reduce((acc, label) => {
    acc[label.name] = label;
    return acc;
  }, {}),
  reducers: {
    add: (state, { payload: label }) => {
      state[label.name] = Item.create(label);
    }
  }
});

export const { add } = labelsSlice.actions;

export const selectItemLabels = labelNames => state => labelNames.map(name => state.labels[name]);
export const selectAllLabels = state => Object.values(state.labels);

export default labelsSlice.reducer;
