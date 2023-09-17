import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const addsharedNote = createAsyncThunk(
  "sharedNote/add-shared-note",
  async ({ senderId, receiverId, note_id, authToken }) => {
    try {
      const axiosWithAuth = axios.create({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
      const response = await axiosWithAuth.post(`shared-note/add-shared-note`, {
        senderUserId: senderId,
        receiverUserId: receiverId,
        noteId: note_id,
      });
      return response.data;
    } catch (error) {
      // Re-throw the error to be caught in the rejected action
      throw error;
    }
  }
);
export const getsharedNote = createAsyncThunk(
  "sharedNote/get-shared-notes-with-note-info",
  async ({ userId, authToken }) => {
    try {
      const axiosWithAuth = axios.create({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
      const response = await axiosWithAuth.get(
        `shared-note/get-shared-notes-with-note-info/${userId}`
      );
      return response.data;
    } catch (error) {
      // Re-throw the error to be caught in the rejected action
      throw error;
    }
  }
);
export const getReceivedNote = createAsyncThunk(
  "sharedNote/get-received-notes-with-note-info",
  async ({ userId, authToken }) => {
    try {
      const axiosWithAuth = axios.create({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
      const response = await axiosWithAuth.get(
        `shared-note/get-received-notes-with-note-info/${userId}`
      );
      return response.data;
    } catch (error) {
      // Re-throw the error to be caught in the rejected action
      throw error;
    }
  }
);

export const openSharedModal = (noteId) => {
  return {
    type: "sharedNote/openSharedModal",
    payload: noteId,
  };
};

export const closeSharedModal = () => {
  return {
    type: "sharedNote/closeSharedModal",
  };
};

const initalState = {
  loading: false,
  sentNotes: [],
  isSharedModalOpen: false,
  sharedNoteId: "",
  receivedNotes: [],
};
const sharedNote = createSlice({
  name: "sharedNote",
  initialState: initalState,
  reducers: {
    openSharedModal: (state, { payload }) => {
      state.isSharedModalOpen = true;
      state.sharedNoteId = payload.noteId;
    },
    closeSharedModal: (state) => {
      state.isSharedModalOpen = false;
      state.sharedNoteId = "";
    },
  },
  extraReducers: {
    [addsharedNote.pending]: (state, action) => {
      state.status = "loading";
    },
    [addsharedNote.fulfilled]: (state, { payload }) => {
      state.isSharedModalOpen = false;
    },
    [addsharedNote.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getsharedNote.pending]: (state, action) => {
      state.status = "loading";
    },
    [getsharedNote.fulfilled]: (state, { payload }) => {
      state.sentNotes = payload;
    },
    [getsharedNote.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getReceivedNote.pending]: (state, action) => {
      state.status = "loading";
    },
    [getReceivedNote.fulfilled]: (state, { payload }) => {
      state.receivedNotes = payload;
    },
    [getReceivedNote.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const sharedNoteActions = sharedNote.actions;
export default sharedNote;
