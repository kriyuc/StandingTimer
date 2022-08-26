import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const AboutPage = () => {
  return (
    <Stack>
      <Typography variant="h3">About</Typography>
      <Box width="66%">
        <p>
          As a software engineer I spend 8-10 hours per day at my desk. So in
          order to support my back and improve my overall health I try to spend
          as much of the day using my standing desk as possible.
        </p>
        <p>
          In order to track how long I am standing per day, so I can hopefully
          increase over time, I created a small Python widget that records how
          long I am standing each day. Once that data is saved, this web app is
          used to analyze the results and see how I am doing over time.
        </p>
        <p>
          The current version of the time tracking widget only saves data to a
          JSON file, but eventually I would like to create an API backed by a DB
          to store the data. So in the meantime, a copy of the JSON file is
          simply added directly into this app.
        </p>
      </Box>
    </Stack>
  );
};
