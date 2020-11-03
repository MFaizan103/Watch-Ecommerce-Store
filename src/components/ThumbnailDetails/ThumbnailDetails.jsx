import React from "react";

export const ThumbnailDetails = ({ images, setIndex }) => {
  return (
    <div className="thumb">
      {images.map((e_thumb, index) => (
        <img
          key={index}
          src={e_thumb}
          onClick={() => {
            setIndex(index);
          }}
        />
      ))}
    </div>
  );
};
