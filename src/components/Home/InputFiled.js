import React, { useEffect, useState } from "react";
import "./inputField.css"; // Import your CSS file
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNote } from "../../redux/slices/noteSlice";
import { closeEditModal } from "../../redux/slices/globalSlice";

function InputField({ onSave }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const user = useSelector((state) => state.user.currentUser);
  const globalStore = useSelector((state) => state.global);
  const notes = useSelector((state) => state.note.notes);
  const sentNotes = useSelector((state) => state.sharedNote.sentNotes);

  useEffect(() => {
    if (globalStore.isEditModaltriggedFromHome) {
      const foundNote = notes.find((item) => {
        return item._id === globalStore.noteId;
      });
      console.log(foundNote);
      setNote(foundNote.note);
      setTitle(foundNote.title);
    }
    if (
      !globalStore.isEditModaltriggedFromHome &&
      globalStore.isEditModalOpen
    ) {
      const foundNote = sentNotes.find((item) => {
        return item._id === globalStore.noteId;
      });
      setNote(foundNote.note);
      setTitle(foundNote.title);
    }
  }, []);
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSave = () => {
    if (!title) {
      return;
    }
    // Pass the title and note to the parent component
    if (!globalStore.isEditModalOpen) {
      dispatch(
        addNote({ title, note, userId: user._id, authToken: user.accessToken })
      );
    }
    if (globalStore.isEditModalOpen && globalStore.isEditModaltriggedFromHome) {
      dispatch(
        editNote({
          title,
          note,
          userId: user._id,
          noteId: globalStore.noteId,
          authToken: user.accessToken,
        })
      );
      dispatch(closeEditModal());
    }
    if (
      !globalStore.isEditModaltriggedFromHome &&
      globalStore.isEditModalOpen
    ) {
      dispatch(
        editNote({
          title,
          note,
          userId: user._id,
          noteId: globalStore.noteId,
          authToken: user.accessToken,
        })
      );
      dispatch(closeEditModal());
    }

    // Clear the input fields after saving
    setTitle("");
    setNote("");
  };

  return (
    <div className="input-field">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Take a note..."
        value={note}
        onChange={handleNoteChange}
      />
      <button className="button-1" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default InputField;
