import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../axios";

// export const sendotp = createAsyncThunk("auth/send-otp", async (data) => {
//   try {
//     const response = await axios.post(`/auth/send-otp`, JSON.stringify(data));
//     return response.data;
//   } catch (error) {
//     // throw error; // Rethrow the error to be caught in the rejected action
//   }
// });

// export const openLoginModal = (loginFrom) => {
//   return {
//     type: "user/openLoginModal",
//     payload: loginFrom,
//   };
// };

// export const closeLoginModal = () => {
//   return {
//     type: "user/closeLoginModal",
//   };
// };

const initalState = {
  loading: false,
  sentNotes: [],
  receivedNotes: [
    { title: "Shopping List", note: "Buy milk, eggs, and bread." },
    { title: "Meeting Notes", note: "Discuss project timelines and goals." },
    { title: "Ideas", note: "Brainstorm ideas for the upcoming campaign." },
    { title: "Shopping List", note: "Buy milk, eggs, and bread." },
    { title: "Meeting Notes", note: "Discuss project timelines and goals." },
    { title: "Ideas", note: "Brainstorm ideas for the upcoming campaign." },
    { title: "Shopping List", note: "Buy milk, eggs, and bread." },
    { title: "Meeting Notes", note: "Discuss project timelines and goals." },
    { title: "Ideas", note: "Brainstorm ideas for the upcoming campaign." },
    { title: "Shopping List", note: "Buy milk, eggs, and bread." },
    { title: "Meeting Notes", note: "Discuss project timelines and goals." },
    { title: "Ideas", note: "Brainstorm ideas for the upcoming campaign." },
  ],
};
const sharedNote = createSlice({
  name: "sharedNote",
  initialState: initalState,
  reducers: {},
  extraReducers: {},
});

export const sharedNoteActions = sharedNote.actions;
export default sharedNote;
