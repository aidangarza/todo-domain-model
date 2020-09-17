import { createSlice } from '@reduxjs/toolkit';
import sample from './fixtures/Labels-sample';
import ToDoItem from "../../models/ToDoItem";

export const labelsSlice = createSlice({
  name: 'labels',
  initialState: sample.reduce((acc, label) => {
    acc[label.name] = label;
    return acc;
  }, {}),
  reducers: {
    add: (state, { payload: label }) => {
      state[label.name] = ToDoItem.create(label);
    }
  }
});

export const { add } = labelsSlice.actions;

export const selectItemLabels = labelNames => state => labelNames.map(name => state.labels[name]);
export const selectAllLabels = state => Object.values(state.labels);

export default labelsSlice.reducer;
