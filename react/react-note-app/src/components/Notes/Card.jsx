import React from "react";
import { useNote } from "../../contexts/NoteContext";

function Card({ note }) {
  const { deleteNote } = useNote();
  return (
    <div className="card">
      <div className="card-header">
        <h3>{note.title}</h3>
        <small>{note.createdAt.slice(0, note.createdAt.indexOf("+"))}</small>
      </div>
      <div className="actions">
        <ion-icon
          onClick={() => {
            deleteNote(note);
          }}
          name="trash-outline"
        ></ion-icon>
        <ion-icon name="create-outline"></ion-icon>
      </div>
      <div className="card-content">
        <p> {note.detail} </p>
      </div>
    </div>
  );
}

export default Card;
