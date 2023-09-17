import { useDispatch, useSelector } from "react-redux";
import "./navBar.css";

import React from "react";
import { openLoginModal, removeUser } from "../../redux/slices/userSlice";

const Navbar = ({ isLoggedIn, onLogoutClick }) => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.currentUser?.username);

  console.log(username);
  const handleLogin = () => {
    dispatch(openLoginModal());
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(removeUser());
    // Perform any other logout-related actions as needed
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">NoteApp</div>

        <div className="login-logout">
          {username ? (
            <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
              <p>Hello {username ? username : "user"}</p>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
