import "./navBar.css";

import React from "react";

const Navbar = ({ isLoggedIn, onLoginClick, onLogoutClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">NoteApp</div>
        <div className="login-logout">
          {isLoggedIn ? (
            <button className="logout-button" onClick={onLogoutClick}>
              Logout
            </button>
          ) : (
            <button className="login-button" onClick={onLoginClick}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
