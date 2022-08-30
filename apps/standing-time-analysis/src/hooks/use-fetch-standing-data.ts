import { useState, useEffect } from "react";

export const useFetchStandingData = () => {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/times")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then((data) => {
        setFetchedData(data);
      });
  }, []);

  return { fetchedData };
};
