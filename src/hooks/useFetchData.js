import { useState, useEffect } from "react";

function useFetchData(apiKey, query) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/person?query=${query}&api_key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [apiKey, query]);

  return data;
}

export default useFetchData;
