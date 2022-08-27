import { Box } from "@mui/material";
import React from "react";
import { BarChart } from "../charts/bar-chart";
import sampleData from "../../test-data/data.json";
import { useBarChartData } from "../../hooks/use-bar-chart-data";
import { ChartWithTitleLayout } from "../charts/chart-with-title-layout";

export const HomePage = () => {
  const data = useBarChartData({ data: Object.values(sampleData["_default"]) });

  return (
    <Box height="80vh" width="85%" m="auto">
      <ChartWithTitleLayout
        title="Standing Time Per Day"
        chart={<BarChart data={data} />}
      />
    </Box>
  );
};
