import { Box, Stack, Typography } from "@mui/material";
import React, { ReactNode } from "react";

export interface ChartWithTitleLayoutProps {
  title: string;
  chart: ReactNode;
}

export const ChartWithTitleLayout = (props: ChartWithTitleLayoutProps) => {
  const { title, chart } = props;

  return (
    <Stack spacing={2} height="100%">
      <Typography variant="h3">{title}</Typography>
      <Box height="100%" width="100%">
        {chart}
      </Box>
    </Stack>
  );
};
