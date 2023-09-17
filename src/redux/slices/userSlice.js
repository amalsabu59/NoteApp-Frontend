import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = await axios.post(`auth/login`, JSON.stringify(data));
    return response.data;
  } catch (error) {
    // Re-throw the error to be caught in the rejected action
    throw error;
  }
});
export const allUsers = createAsyncThunk("auth/get-all-users", async () => {
  try {
    const response = await axios.get(`auth/get-all-users`);
    return response.data;
  } catch (error) {
    // Re-throw the error to be caught in the rejected action
    throw error;
  }
});
// userSlice.js or wherever your Redux actions are defined
export const loadUserFromLocalStorage = (userJSON) => {
  const user = JSON.parse(userJSON);
  return {
    type: "user/loadUserFromLocalStorage",
    payload: user,
  };
};

export const openLoginModal = (loginFrom) => {
  return {
    type: "user/openLoginModal",
    payload: loginFrom,
  };
};
export const removeUser = (loginFrom) => {
  return {
    type: "user/removeUser",
    payload: "",
  };
};

export const closeLoginModal = () => {
  return {
    type: "user/closeLoginModal",
  };
};

const initalState = {
  currentUser: {
    username: "",
  },
  allUsers: [],
  failedStatus: "",
  loginModal: false,
};
const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    openLoginModal: (state, action) => {
      state.loginModal = true;
      state.loginFrom = action.payload;
    },
    closeLoginModal: (state) => {
      state.loginModal = false;
    },
    loadUserFromLocalStorage: (state, { payload }) => {
      state.currentUser = payload;
    },
    removeUser: (state) => {
      state.currentUser = "";
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
      localStorage.setItem("user", JSON.stringify(payload));
      state.loginModal = false;
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
      state.failedStatus = "Wrong Credentials";
    },
    [allUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [allUsers.fulfilled]: (state, { payload }) => {
      state.allUsers = payload;
    },
    [allUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
