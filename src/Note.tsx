import React from "react";
import "./styles1.css";

type NoteProps = {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
};

function Note(props: NoteProps) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
