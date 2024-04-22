import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //execute the given callback when the dependencies passed in the array are modified within the component
  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
    setIsLoading(false);
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
