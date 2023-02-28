import { Box, Typography } from "@mui/material";
import { NoteObject } from "../models/notes";
import Note from "./Note";
interface INotesProps {
  notes: NoteObject[];
  deleteNote: (id: number) => void;
}
const Notes: React.FC<INotesProps> = ({ notes, deleteNote }) => {
  return (
    <Box>
      <Typography variant="h5">Notes</Typography>
      <Box>
        {notes.map((note) => (
          <Note note={note} key={note.id} deleteNote={deleteNote} />
        ))}
      </Box>
    </Box>
  );
};

export default Notes;
