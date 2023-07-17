import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isLoginOpen: boolean;
  isSignupOpen: boolean;
}

export const modal = createSlice({
  name: 'modal',

  initialState: {
    isLoginOpen: false,
    isSignupOpen: false,
  } as ModalState,

  reducers: {
    openLoginModal: (state) => {
      state.isLoginOpen = true;
    },
    closeLoginModal: (state) => {
      state.isLoginOpen = false;
    },
    openSignupModal: (state) => {
      state.isSignupOpen = true;
    },
    closeSignupModal: (state) => {
      state.isSignupOpen = false;
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  openSignupModal,
  closeSignupModal,
} = modal.actions;
export default modal.reducer;
