import React from "react";
import "./noteList.css"; // Import your CSS file
import NoteItem from "./NoteItem";
import ShareModal from "../ShareModal/ShareModal";
import EditModal from "../EditModal/EditModal";

function NoteList({ notes, onDelete, onEdit, isFromShared }) {
  return (
    <div className="note-list">
      <ShareModal
        open={false}
        // onClose={handleShareModalClose}
        onShare={(selectedUsers) => {
          // Handle sharing logic here
          console.log("Shared with:", selectedUsers);
        }}
      />
      <EditModal open={false} />
      {notes?.map((note, index) => {
        return (
          <>
            <NoteItem
              key={index}
              note={note}
              onDelete={() => onDelete(index)}
              onEdit={(editedNote) => onEdit(index, editedNote)}
              isFromShared={isFromShared}
            />
          </>
        );
      })}
    </div>
  );
}

export default NoteList;
