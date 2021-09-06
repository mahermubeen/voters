import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isOpenOffice: false,
  inputShow: false,
  inputCount: 0,
  checked: false,
  notifOpen: false
};

const counterSlice = createSlice({
  name: "addMemberModal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = !state.isOpen;
    },
    closeModal(state) {
      state.isOpen = !state.isOpen;
    },
    openOfficeModal(state) {
      state.isOpenOffice = !state.isOpenOffice;
    },
    closeOfficeModal(state) {
      state.isOpenOffice = !state.isOpenOffice;
    },
    showInput(state) {
      state.inputShow = !state.inputShow;
      state.inputCount++;
    },
    onToggleSwitchChange(state) {
      state.checked = !state.checked;
    },
    openNotif(state){
        state.notifOpen = !state.notifOpen;
    }
  },
});

export const { openModal, showInput, closeModal, onToggleSwitchChange, openNotif, openOfficeModal, closeOfficeModal } = counterSlice.actions;
export default counterSlice.reducer;
