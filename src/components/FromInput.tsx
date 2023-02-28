import { useState } from "react";
import { InputBase, Box, Button, styled, Typography } from "@mui/material";
import { NoteObject } from "../models/notes";
import { v4 as uuid } from "uuid";
import { TITLE_LIMIT, NOTES_LIMIT } from "../constants/constant";

const Error = styled(Typography)`
  background-color: red;
  color: #fff;
  padding: 10px;
  width: 50%;
`;
const Container = styled(Box)`
  & > * {
    margin: 20px 20px 20px 0;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    opacity: 0.4;
    width: 300px;
    padding-right: 25px;
    ::placeholder {
       color: white;
   }
  }
  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -10px;
  }
  & > span {
    font-size: 10px;
    position: relative;
    right: 40px;
  }
`;

const defultObject = {
  id: 0,
  title: "",
  note: "",
  color: "",
  date: new Date().toLocaleDateString().toString(),
};

interface ICreateNoteprops {
  addNotes: (note: NoteObject) => void;
}

const FromInput: React.FC<ICreateNoteprops> = ({ addNotes }) => {
  const [note, setNote] = useState<NoteObject>(defultObject);
  const [error, setError] = useState<string>("");

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) {
      setError("");
    }
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onCreateNote = () => {
    if (!note.title || !note.note) {
      setError("All field are mandatory");
      return;
    }
    addNotes({ ...note, id: uuid() });
    setNote(defultObject);
  };
  return (
    <Container>
      <InputBase
        placeholder="enter your title"
        onChange={(e) => onValueChange(e)}
        name="title"
        value={note.title}
        inputProps={{
          maxLength: TITLE_LIMIT,
        }}
        style={{color: 'white'}}
      />
      <Box component="span">
        {note.title.length}/{TITLE_LIMIT}
      </Box>
      <InputBase
        placeholder="enter your notes"
        onChange={(e) => onValueChange(e)}
        name="note"
        value={note.note}
        style={{color: 'white'}}
        inputProps={{
          maxLength: NOTES_LIMIT,
        }}
      />
      <Box component="span">
        {note.note.length}/{NOTES_LIMIT}
      </Box>
      <InputBase
        type="color"
        defaultValue={"#F5F5F5"}
        onChange={(e) => onValueChange(e)}
        name="color"
      />
      <Button onClick={() => onCreateNote()} variant="outlined">
        Submit
      </Button>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default FromInput;
