import React, { useState } from "react";
import "./shareModal.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close"; // Import the CloseIcon
import { useDispatch, useSelector } from "react-redux";
import {
  addsharedNote,
  closeSharedModal,
} from "../../redux/slices/sharedNoteSlice";

function ShareModal({ open, onClose, onShare }) {
  const [search, setSearch] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const users = useSelector((state) => state.user.allUsers);
  const userId = useSelector((state) => state.user.currentUser?._id);
  const sharedNoteId = useSelector((state) => state.sharedNote.sharedNoteId);

  const dispatch = useDispatch();
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // const handleUserClick = (user) => {
  //   setSelectedUsers((prevSelectedUsers) =>
  //     prevSelectedUsers.some((selectedUser) => selectedUser._id === user._id)
  //       ? prevSelectedUsers.filter(
  //           (selectedUser) => selectedUser._id !== user._id
  //         )
  //       : [...prevSelectedUsers, user]
  //   );
  // };

  const handleUserClick = (user) => {
    setSelectedUsers([user]);
  };

  const handleShareClick = () => {
    console.log("dsfdf", selectedUsers[0]?._id, sharedNoteId);
    // debugger;
    dispatch(
      addsharedNote({
        senderId: userId,
        receiverId: selectedUsers[0]?._id,
        note_id: sharedNoteId,
      })
    );
  };

  const handleClose = () => {
    dispatch(closeSharedModal());
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <IconButton
        aria-label="close"
        className="close-button"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle>Share Note</DialogTitle>
      <DialogContent>
        <TextField
          label="Search Users"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
        />
        <div className="user-list">
          {users
            .filter((user) =>
              user.username.toLowerCase().includes(search.toLowerCase())
            )
            .map((user) => (
              <div
                key={user._id}
                className={`user-item ${
                  selectedUsers.some(
                    (selectedUser) => selectedUser._id === user._id
                  )
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleUserClick(user)}
              >
                {user.username}
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
