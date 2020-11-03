import React from "react";

export const Sizes = ({ sizes }) => {
  return (
    <div className="sizes">
      {sizes.map((e_size, index) => (
        <button key={index}>{e_size}</button>
      ))}
    </div>
  );
};
