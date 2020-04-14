import React from "react";
import image from "./images/image.webp";
import "./style.scss";
export const GalleryPage = () => {
  const gallery = [];
  for (let i = 0; i < 12; i++) {
    gallery.push(
      <div className="image" key={i}>
        <img src={image} alt="" />
      </div>
    );
  }
  return (
    <div className="gallery-container">
      <h3 className="page-title">Gallery</h3>
      <div className="gallery-wrapper">{gallery}</div>
    </div>
  );
};
