import React, { useEffect, useState } from "react";
import "./sharedNotes.css";
import NoteList from "../../components/Home/NoteList";
import { useDispatch, useSelector } from "react-redux";
import {
  getReceivedNote,
  getsharedNote,
} from "../../redux/slices/sharedNoteSlice";
const SharedNotes = () => {
  const [activeTab, setActiveTab] = useState("sent"); // Default tab is "sent"

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const userId = useSelector((state) => state.user.currentUser?._id);
  const notes = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getsharedNote({ userId }));
    dispatch(getReceivedNote({ userId }));
  }, [userId, notes]);

  const sentNotes = useSelector((state) => state.sharedNote.sentNotes);
  const receivedNotes = useSelector((state) => state.sharedNote.receivedNotes);

  return (
    <div>
      <div className="tabs">
        <div
          className={`tab ${activeTab === "sent" ? "active" : ""}`}
          onClick={() => handleTabClick("sent")}
        >
          Sent
        </div>
        <div
          className={`tab ${activeTab === "received" ? "active" : ""}`}
          onClick={() => handleTabClick("received")}
        >
          Received
        </div>
      </div>

      <div className="tab-content">
        {activeTab === "sent" && (
          <div>
            <div></div>
            <NoteList notes={sentNotes} isFromShared={true} />
          </div>
        )}

        {activeTab === "received" && (
          <div>
            <NoteList
              notes={receivedNotes}
              isFromShared={true}
              isFromRecived={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SharedNotes;
