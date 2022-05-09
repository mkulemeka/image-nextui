import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      });
  }, [url]);

  return { images, isLoading };
};

export default useFetch;
