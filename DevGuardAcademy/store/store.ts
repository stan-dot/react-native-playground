
import { configureStore } from '@reduxjs/toolkit';
import decksReducer from './slices/decksSlice';
import statsReducer from './slices/statsSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    decks: decksReducer,
    stats: statsReducer,
    user:userReducer
  },
});

export default store;
