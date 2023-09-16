import React, { useState } from "react";
import "./sharedNotes.css";
import NoteList from "../../components/Home/NoteList";
import { useSelector } from "react-redux";
const SharedNotes = () => {
  const [activeTab, setActiveTab] = useState("sent"); // Default tab is "sent"

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
            <NoteList notes={receivedNotes} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SharedNotes;
