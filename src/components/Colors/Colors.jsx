import React from "react";

export const Colors = ({colors}) => {
  return (
    <div className="colors">
      {colors.map((e_color, index) => (
        <button key={index} style={{ background: e_color }}></button>
      ))}
    </div>
  );
};
