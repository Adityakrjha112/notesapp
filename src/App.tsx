import { useState, useEffect } from "react";
import FromInput from "./components/FromInput";
import Header from "./components/Header";
import { Box } from "@mui/material";
import Notes from "./components/Notes";
import { NoteObject } from "./models/notes";
function App() {
  const [notes, setnotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    if (localStorage.getItem("notes")) {
      setnotes(JSON.parse(localStorage.getItem("notes") as string));
    }
  }, []);
  const addNotes = (note: NoteObject) => {
    setnotes([note, ...notes]);
    localStorage.setItem("notes", JSON.stringify([note, ...notes]));
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setnotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };
  return (
    <>
      <Header />
      <Box style={{ padding: 20 }}>
        <FromInput addNotes={addNotes} />
        <Notes notes={notes} deleteNote={deleteNote} />
      </Box>
    </>
  );
}

export default App;
