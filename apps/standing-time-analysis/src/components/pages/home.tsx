import { Box } from "@mui/material";
import React from "react";
import { BarChart } from "../charts/bar-chart";
import { useBarChartData } from "../../hooks/use-bar-chart-data";
import { ChartWithTitleLayout } from "../charts/chart-with-title-layout";
import { useFetchStandingData } from "../../hooks/use-fetch-standing-data";

export const HomePage = () => {
  const { fetchedData } = useFetchStandingData();
  const data = useBarChartData({ data: fetchedData || [] });

  return (
    <Box height="80vh" width="85%" m="auto">
      <ChartWithTitleLayout
        title="Standing Time Per Day"
        chart={<BarChart data={data} />}
      />
    </Box>
  );
};
