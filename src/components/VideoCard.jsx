/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import "./VideoCard.css";

export const VideoCard = ({
  title,
  description,
  genero,
  id
}) => {
  return (
    <div className="card-container1">
      {title && <h1 className="card-title1">{title}</h1>}
      {description && <p className="card-description1">{description}</p>}
      {genero && <h1 className="card-genero1">{genero}</h1>}
    </div>
  );
};