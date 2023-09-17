import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const openEditModal = (data) => {
  return {
    type: "global/openEditModal",
    payload: data,
  };
};
export const closeEditModal = (data) => {
  return {
    type: "global/closeEditModal",
    payload: data,
  };
};

const initalState = {
  isEditModalOpen: false,
  isEditModaltriggedFromHome: false,
  noteId: "",
};
const gloabalSlice = createSlice({
  name: "global",
  initialState: initalState,
  reducers: {
    openEditModal: (state, action) => {
      state.isEditModalOpen = true;
      state.isEditModaltriggedFromHome =
        action.payload.isEditModaltriggedFromHome;
      state.noteId = action.payload.noteId;
    },
    closeEditModal: (state, action) => {
      state.isEditModalOpen = false;
      state.isEditModaltriggedFromHome = "";
    },
  },
  extraReducers: {},
});

export const gloabalActions = gloabalSlice.actions;
export default gloabalSlice;
