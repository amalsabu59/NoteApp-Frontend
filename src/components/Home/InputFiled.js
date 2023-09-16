import React, { useState } from "react";
import "./inputField.css"; // Import your CSS file

function InputField({ onSave }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSave = () => {
    // Pass the title and note to the parent component
    onSave({ title, note });

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
