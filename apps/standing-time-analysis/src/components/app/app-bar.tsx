import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export const AppBar = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome To Standing Time Analysis
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};
