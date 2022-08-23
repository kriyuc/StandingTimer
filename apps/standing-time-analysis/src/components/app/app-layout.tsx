import { Box, Stack } from "@mui/material";
import React, { ReactNode } from "react";
import { AppBar } from "./app-bar";

export interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = (props: AppLayoutProps) => {
  const { children } = props;

  return (
    <Stack spacing={1}>
      <header>
        <AppBar />
      </header>

      <main>
        <Box
          minWidth={900}
          maxWidth={1200}
          minHeight="90vh"
          margin={"auto"}
          p={4}
          bgcolor="white"
          borderRadius={5}
        >
          {children}
        </Box>
      </main>
    </Stack>
  );
};
