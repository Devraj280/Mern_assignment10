import React, { useState } from "react";

type CreateAreaProps = {
  onAdd: (note: { title: string; content: string }) => void;
};

function CreateArea(props: CreateAreaProps) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (note.title.trim() === "" && note.content.trim() === "") {
      alert("Note cannot be empty!");
      return;
    }

    props.onAdd(note);
    setNote({ title: "", content: "" });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={3}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
