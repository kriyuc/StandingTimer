import { format, parseISO } from "date-fns";
import { useMemo } from "react";
import { StandingData } from "../interfaces/standing-data";
import { roundToX } from "../utils/rounding";

export interface UseBarChartDataProps {
  data: StandingData[];
}

export const useBarChartData = (props: UseBarChartDataProps) => {
  const { data } = props;

  return useMemo(() => {
    const newData: DataMapper = {};

    data.forEach((day: StandingData) => {
      day.segments.forEach((segment: number, index: number) => {
        newData[index] = [
          ...(newData[index] || []),
          { date: day.date, value: segment },
        ];
      });
    });

    return Object.entries(newData).map(([key, seriesData]) => {
      return {
        label: `Series ${key}`,
        data: seriesData.map((series: { date: string; value: number }) => {
          return {
            x: format(parseISO(series.date), "MMM do"),
            y: roundToX(Math.floor(series.value / 100) / 60, 2),
          };
        }),
      };
    });
  }, []);
};

interface DateValue {
  date: string;
  value: number;
}

type DataMapper = Record<number, DateValue[]>;
