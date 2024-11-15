import { useState, useEffect } from "react";

function useFetchImages(id, apiKey) {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(
        `https://api.themoviedb.org/3/person/${id}/images?api_key=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => setImageData(data.profiles));
    }
  }, [id, apiKey]);

  return imageData;
}

export default useFetchImages;
