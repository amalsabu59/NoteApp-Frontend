import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css"; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">{/* <h1>Notes</h1> */}</div>
      <ul className="sidebar-nav">
        <li>
          <NavLink to="/" activeClassName="active">
            Notes
          </NavLink>
        </li>
        <li>
          <NavLink to="/shared-notes" activeClassName="active">
            SharedNotes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
