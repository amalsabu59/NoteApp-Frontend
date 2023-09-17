import React from "react";
import "./noteList.css"; // Import your CSS file
import NoteItem from "./NoteItem";
import ShareModal from "../ShareModal/ShareModal";
import EditModal from "../EditModal/EditModal";
import { useSelector } from "react-redux";

function NoteList({ notes, onDelete, onEdit, isFromShared, isFromRecived }) {
  const globalStore = useSelector((state) => state.global);
  const isShareModalOpen = useSelector(
    (state) => state.sharedNote.isSharedModalOpen
  );
  return (
    <div className="note-list">
      <ShareModal
        open={isShareModalOpen}
        // onClose={handleShareModalClose}
        onShare={(selectedUsers) => {
          // Handle sharing logic here
          console.log("Shared with:", selectedUsers);
        }}
      />
      <EditModal open={globalStore.isEditModalOpen} />
      {notes?.map((note, index) => {
        return (
          <>
            <NoteItem
              key={index}
              note={note}
              onDelete={() => onDelete(index)}
              onEdit={(editedNote) => onEdit(index, editedNote)}
              isFromShared={isFromShared}
              isFromRecived={isFromRecived}
            />
          </>
        );
      })}
    </div>
  );
}

export default NoteList;
