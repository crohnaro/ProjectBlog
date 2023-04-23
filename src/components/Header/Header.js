import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


import styles from "../../../styles/Header.module.css";


export default function ButtonAppBar() {
  return (
    <AppBar className={styles.header} position="static">
     
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="secondary"
          >
            ProjectBlog
          </Typography>
          <Button color="secondary">Login</Button>
        </Toolbar>
    </AppBar>
  );
}
