import { useState, useEffect } from "react";
const useFetch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const data = await fetch(url);
        setData(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData("http:hi");
  });

  return [data, error];
};

export default useFetch;
