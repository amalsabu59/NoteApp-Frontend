import React, { useState } from "react";
import Navbar from "../../components/Layouts/NavBar";
import InputField from "../../components/Home/InputFiled";
import NoteList from "../../components/Home/NoteList";
import { useSelector } from "react-redux";

const Notes = () => {
  const notes = useSelector((state) => state.note.notes);

  const handleSaveNote = (newNote) => {};
  return (
    <div>
      {/* <Navbar /> */}
      <InputField onSave={handleSaveNote} />
      <NoteList notes={notes} />
    </div>
  );
};
export default Notes;
