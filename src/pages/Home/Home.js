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

const Home = () => {
  const [notes, setNotes] = useState(/* Your notes data here */);
  const isLoggedin = true;
  const handleSaveNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  const notify = () =>
    toast.success("🦄 Wow so easy!", {
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
    notify();
  }, []);

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
        <Login open={true} />
        <div className="content-container">
          {/* Include the Sidebar component */}
          <Sidebar />

          <div className="main-content">
            <Routes>
              <Route path="/notes" element={<Notes />} />
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
