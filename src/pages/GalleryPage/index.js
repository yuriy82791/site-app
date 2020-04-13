import React from "react";
import image from "./images/image.webp";
export const GalleryPage = () => {
  const gallery = [];
  for (let i = 0; i < 10; i++) {
    gallery.push(
      <div className="image">
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
