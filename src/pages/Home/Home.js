import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../../components/Layouts/NavBar";
import InputField from "../../components/Home/InputFiled";
import NoteList from "../../components/Home/NoteList";
import Notes from "../Notes/Notes";

import "./home.css"; // Import a CSS file for layout styles
import Sidebar from "../../components/Layouts/Sidebar";
import SharedNotes from "../SharedNote/SharedNote";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import {
  allUsers,
  loadUserFromLocalStorage,
  openLoginModal,
} from "../../redux/slices/userSlice";
import { getNote } from "../../redux/slices/noteSlice";

const Home = () => {
  const [notes, setNotes] = useState(/* Your notes data here */);
  const isLoggedin = true;
  const handleSaveNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  const dispatch = useDispatch();
  const loginModalOpen = useSelector((state) => state.user.loginModal);
  const failedStatus = useSelector((state) => state.user.failedStatus);
  const user = useSelector((state) => state.user.currentUser?._id);
  const userFromSession = localStorage.getItem("user");
  const notify = (message) =>
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  useEffect(() => {
    if (failedStatus) {
      notify(failedStatus);
    }
    const storedUserData = localStorage.getItem("user");
    dispatch(loadUserFromLocalStorage(storedUserData));
  }, [failedStatus]);

  useEffect(() => {
    if (user) {
      dispatch(getNote(user));
    }
    dispatch(allUsers());
    if (!userFromSession) {
      dispatch(openLoginModal());
    }
  }, [user]);

  return (
    <Router>
      <div className="home-container">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Navbar />
        <Login open={loginModalOpen} />
        <div className="content-container">
          {/* Include the Sidebar component */}
          <Sidebar />

          <div className="main-content">
            <Routes>
              {/* <Route path="/notes" element={<Notes />} index={true} /> */}
              <Route path="/shared-notes" element={<SharedNotes />} />
              <Route path="/" element={<Notes />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Home;
