import { NoteObject } from "../models/notes";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  styled,
} from "@mui/material";
interface INoteprops {
  note: NoteObject;
  deleteNote: (id: number) => void;
}

const StyledCard = styled(Card)`
  width: 400px;
  margin: 20px;
`;

const Wrapper = styled(Box)`
  & > button {
    border: 1px solid #000;
    background: rgb(0, 30, 60);
    margin-top: 5px;
  }
`;
const Note: React.FC<INoteprops> = ({ note, deleteNote }) => {
  return (
    <StyledCard style={{ background: note.color }}>
      <CardContent>
        <Wrapper>
          <Typography>{note.title}</Typography>
          <Typography>{note.note}</Typography>
          <Typography>{note.date}</Typography>
          <Button variant="outlined" onClick={() => deleteNote(note.id)}>
            Delete
          </Button>
        </Wrapper>
      </CardContent>
    </StyledCard>
  );
};

export default Note;
