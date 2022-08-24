import React from "react";
import { Chart } from "react-charts";

export interface LineChartProps {
  data: any[];
}

export const LineCharts = (props: LineChartProps) => {
  const { data } = props;

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return <Chart data={data} axes={axes} />;
};
