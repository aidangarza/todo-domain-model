import { configureStore } from '@reduxjs/toolkit';
import listsReducer from '../features/lists/listsSlice';
import itemsReducer from '../features/items/itemsSlice';
import labelsReducer from '../features/labels/labelsSlice';

export default configureStore({
  reducer: {
    lists: listsReducer,
    items: itemsReducer,
    labels: labelsReducer
  },
});
