import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import noteSlice from "./slices/noteSlice";
import sharedNoteSlice from "./slices/sharedNoteSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    note: noteSlice.reducer,
    sharedNote: sharedNoteSlice.reducer,
  },
});

export default store;
