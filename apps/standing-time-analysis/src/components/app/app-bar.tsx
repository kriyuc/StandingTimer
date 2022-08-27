import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useNewRelic } from "../../hooks/use-new-relic";

const pages = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
];

export const AppBar = () => {
  const { addNewRelicAction } = useNewRelic();

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Stack
          spacing={2}
          direction="row"
          display="flex"
          alignItems="center"
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderRightWidth: 2, backgroundColor: "white" }}
            />
          }
        >
          <Typography variant="h5">Standing Time Analysis</Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page.label}
                to={page.url}
                onClick={() =>
                  addNewRelicAction("app-bar-page-clicked", {
                    link: page.label,
                  })
                }
              >
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Stack>
      </Toolbar>
    </MuiAppBar>
  );
};
