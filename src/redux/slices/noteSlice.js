import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const getNote = createAsyncThunk("note/get-all-notes", async (id) => {
  try {
    const response = await axios.get(`note/get-all-notes/${id}`);
    return response.data;
  } catch (error) {
    // Re-throw the error to be caught in the rejected action
    throw error;
  }
});
export const addNote = createAsyncThunk(
  "note/get-all-notes",
  async ({ title, note, authToken, userId }) => {
    try {
      const axiosWithAuth = axios.create({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
      const response = await axiosWithAuth.post(`note/add-note`, {
        title,
        note,
        userId,
      });
      return response.data;
    } catch (error) {
      // Re-throw the error to be caught in the rejected action
      throw error;
    }
  }
);
export const editNote = createAsyncThunk(
  "note/edit-note",
  async ({ title, note, authToken, userId, noteId }) => {
    try {
      const axiosWithAuth = axios.create({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
      const response = await axiosWithAuth.put(`note/edit-note/${noteId}`, {
        title,
        note,
        userId,
      });
      return response.data;
    } catch (error) {
      // Re-throw the error to be caught in the rejected action
      throw error;
    }
  }
);
export const deleteNote = createAsyncThunk(
  "note/delete-note",
  async ({ authToken, userId, noteId }) => {
    try {
      const axiosWithAuth = axios.create({
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      });
      const response = await axiosWithAuth.delete(
        `note/delete-note/${noteId}/${userId}`
      );
      return response.data;
    } catch (error) {
      // Re-throw the error to be caught in the rejected action
      throw error;
    }
  }
);
// export const closeLoginModal = () => {
//   return {
//     type: "user/closeLoginModal",
//   };
// };

const initalState = {
  loading: false,
  notes: [],
};
const noteSlice = createSlice({
  name: "note",
  initialState: initalState,
  reducers: {},
  extraReducers: {
    [getNote.pending]: (state, action) => {
      state.status = "loading";
    },
    [getNote.fulfilled]: (state, { payload }) => {
      state.notes = payload;
    },
    [getNote.rejected]: (state, action) => {
      state.status = "failed";
    },
    [addNote.pending]: (state, action) => {
      state.status = "loading";
    },
    [addNote.fulfilled]: (state, { payload }) => {
      state.notes = payload;
    },
    [addNote.rejected]: (state, action) => {
      state.status = "failed";
    },
    [editNote.pending]: (state, action) => {
      state.status = "loading";
    },
    [editNote.fulfilled]: (state, { payload }) => {
      state.notes = payload;
    },
    [editNote.rejected]: (state, action) => {
      state.status = "failed";
    },
    [deleteNote.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteNote.fulfilled]: (state, { payload }) => {
      state.notes = payload;
    },
    [deleteNote.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const noteActions = noteSlice.actions;
export default noteSlice;
