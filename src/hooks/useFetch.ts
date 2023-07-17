import { useState, useEffect } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState([]);
  const abortController = new AbortController();

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        signal: abortController.signal,
      });
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.error("Error occurred during fetch:", error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return data;
}
