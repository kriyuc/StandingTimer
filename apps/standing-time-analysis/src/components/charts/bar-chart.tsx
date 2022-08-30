import React, { useMemo } from "react";
import { Chart } from "react-charts";

export interface BarChartProps {
  data: any[];
}

export const BarChart = (props: BarChartProps) => {
  const { data } = props;

  const series = useMemo(
    () => ({
      type: "bar",
    }),
    []
  );

  const axes = useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { position: "left", type: "linear", stacked: true },
    ],
    []
  );

  return data.length ? <Chart data={data} series={series} axes={axes} /> : null;
};
