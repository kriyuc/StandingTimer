import { Box } from "@mui/material";
import React, { useMemo } from "react";
import { BarChart } from "../charts/bar-chart";

export const HomePage = () => {
  const data = useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          { x: "group 1", y: 5 },
          { x: "group 2", y: 2 },
          { x: "group 3", y: 9 },
        ],
      },
      {
        label: "Series 2",
        data: [
          { x: "group 1", y: 5 },
          { x: "group 2", y: 2 },
          { x: "group 3", y: 9 },
        ],
      },
    ],
    []
  );

  return (
    <Box height="80vh" width="90%">
      <BarChart data={data} />
    </Box>
  );
};
