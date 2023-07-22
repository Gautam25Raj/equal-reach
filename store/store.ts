import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import modalReducer from './slice/modalSlice';

export const store = configureStore({
  reducer: {
    modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = typeof store.getState;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
