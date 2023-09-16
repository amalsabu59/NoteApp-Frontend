import React, { useState } from "react";
import "./noteItem.css"; // Import your CSS file
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import ShareIcon from "@mui/icons-material/Share";
import InputField from "./InputFiled";
import ShareModal from "../ShareModal/ShareModal";

function NoteItem({ note, onDelete, onEdit, isFromShared }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState("note");
  const [isShareModalOpen, setShareModalOpen] = useState(true);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedNote);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  const handleShareClick = () => {
    setShareModalOpen(true);
  };

  const handleShareModalClose = () => {
    setShareModalOpen(false);
  };

  return (
    <div className="note-item">
      <div className="note-display">
        {isFromShared && <p>shared by Amal</p>}
        <h2>{note.title}</h2>
        <p>{note.note}</p>
        <div>
          <button onClick={handleEditClick} className="button-noteitem">
            <EditIcon />
          </button>
          <button onClick={handleDeleteClick} className="button-noteitem">
            <DeleteIcon />
          </button>
          <button className="button-noteitem">
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
