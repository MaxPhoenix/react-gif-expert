import { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Loading...</h2>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} /> //passing all fields from img object to child component
        ))}
      </div>
    </>
  );
};

export default GifGrid;
