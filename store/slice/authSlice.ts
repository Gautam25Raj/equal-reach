import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string;
  isLoggedIn: boolean;
  username: string;
  userId: string;
}

export const auth = createSlice({
  name: 'auth',

  initialState: {
    token: '',
    isLoggedIn: false,
    username: '',
  } as AuthState,

  reducers: {
    logIn: (state, action: PayloadAction<AuthState>) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.token = '';
      state.username = '';
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
