import { AppBar, Toolbar, Typography } from "@mui/material";

import logoIcon from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <img
          src={logoIcon}
          alt="logo"
          style={{ width: "50px", marginRight: 10 }}
        />
        <Typography>Short NoteApp</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
