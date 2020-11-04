import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="video">
        <video width="1200" autoplay="autoplay" loop="loop" muted>
          <source
            src="https://embed.widencdn.net/stream/sd/citizenwatch/es3rgzr61l/Aqualand_30_1200x600_Ecommerce.mp4?u=lsrsa5"
            typeof="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};