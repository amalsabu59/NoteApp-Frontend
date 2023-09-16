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
  currentUser: {
    username: "",
  },
  isLoggedin: true,
};
const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {},
  extraReducers: {},
});

export const userActions = userSlice.actions;
export default userSlice;
