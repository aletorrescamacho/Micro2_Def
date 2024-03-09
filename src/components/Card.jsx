/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

import "./Card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
  subs,
  // eslint-disable-next-line no-unused-vars
  id
}) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {buttonText && link && (
        <a href={link} className="card-btn">
          {buttonText}
        </a>
      )}
      {subs && <p className="subs">{subs}</p>}
    </div>
  );
};