import { configureStore } from '@reduxjs/toolkit';
import listsReducer from '../features/lists/listsSlice';

export default configureStore({
  reducer: {
    lists: listsReducer,
  },
});
