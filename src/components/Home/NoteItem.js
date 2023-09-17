import React, { useState } from "react";
import "./noteItem.css"; // Import your CSS file
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import ShareIcon from "@mui/icons-material/Share";
import InputField from "./InputFiled";
import ShareModal from "../ShareModal/ShareModal";
import { useDispatch, useSelector } from "react-redux";
import { openEditModal } from "../../redux/slices/globalSlice";
import { deleteNote } from "../../redux/slices/noteSlice";
import { openSharedModal } from "../../redux/slices/sharedNoteSlice";

function NoteItem({ note, onDelete, onEdit, isFromShared, isFromRecived }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState("note");
  const [isShareModalOpen, setShareModalOpen] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const handleEditClick = () => {
    dispatch(
      openEditModal({
        isEditModaltriggedFromHome: isFromShared ? false : true,
        noteId: note._id,
      })
    );
  };

  const handleSaveClick = () => {
    onEdit(editedNote);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (confirmDelete) {
      dispatch(
        deleteNote({
          authToken: user.accessToken,
          userId: user._id,
          noteId: note._id,
        })
      );
    }
  };

  const handleShareClick = () => {
    dispatch(openSharedModal({ noteId: note._id }));
  };

  const handleShareModalClose = () => {
    setShareModalOpen(false);
  };

  return (
    <div className="note-item">
      <div className="note-display">
        {/* {isFromShared && <p>shared by Amal</p>} */}
        <h4>{note.title}</h4>
        <p>{note.note}</p>
        <div>
          {!isFromRecived && (
            <button onClick={handleEditClick} className="button-noteitem">
              <EditIcon />
            </button>
          )}
          {!isFromShared && (
            <>
              <button onClick={handleDeleteClick} className="button-noteitem">
                <DeleteIcon />
              </button>
              <button className="button-noteitem" onClick={handleShareClick}>
                <ShareIcon />
              </button>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
