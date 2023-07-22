import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isLoginOpen: boolean;
  isSignupOpen: boolean;
  isEditOpen: boolean;
}

export const modal = createSlice({
  name: 'modal',

  initialState: {
    isLoginOpen: false,
    isSignupOpen: false,
    isEditOpen: false,
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
    openEditModal: (state) => {
      state.isEditOpen = true;
    },
    closeEditModal: (state) => {
      state.isEditOpen = false;
    },
  },
});

export const {
  openLoginModal,
  closeLoginModal,
  openSignupModal,
  closeSignupModal,
  openEditModal,
  closeEditModal,
} = modal.actions;
export default modal.reducer;
