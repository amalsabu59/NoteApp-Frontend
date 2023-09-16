import React, { useState } from "react";
import "./shareModal.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function ShareModal({ open, onClose, onShare }) {
  const [search, setSearch] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const users = [
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "User6",
    "User7",
    "User8",
    // Add your list of users here
  ];

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleUserClick = (user) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(user)
        ? prevSelectedUsers.filter((u) => u !== user)
        : [...prevSelectedUsers, user]
    );
  };

  const handleShareClick = () => {
    onShare(selectedUsers);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Share Note</DialogTitle>
      <DialogContent>
        <TextField
          label="Search Users"
          variant="outlined"
          fullWidth
          value={search}
          onChange={handleSearchChange}
        />
        <div className="user-list">
          {users
            .filter((user) => user.toLowerCase().includes(search.toLowerCase()))
            .map((user) => (
              <div
                key={user}
                className={`user-item ${
                  selectedUsers.includes(user) ? "selected" : ""
                }`}
                onClick={() => handleUserClick(user)}
              >
                {user}
              </div>
            ))}
        </div>
        <Button variant="contained" color="primary" onClick={handleShareClick}>
          Share
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default ShareModal;
