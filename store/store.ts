import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import authReducer from './slice/authSlice';
import modalReducer from './slice/modalSlice';

export const store = configureStore({
  reducer: {
    authReducer,
    modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = typeof store.getState;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
