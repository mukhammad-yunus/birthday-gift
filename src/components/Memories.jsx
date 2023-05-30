import React from "react";
import { imagesData } from "./data.js";
import Images from "./Images.jsx";

export default function Memories({ setIsImage, setIsEnd }) {
  function toggle() {
    setIsImage(false)
    setIsEnd(true)
  }
  
  const renderedImg = imagesData.map((image) => {
    const url = `https://drive.google.com/uc?export=view&id=${image.src}`;
    return (
      <div key={image.src} className="image-container">
        <Images link={url} />
        <p className="memory">{image.body}</p>
      </div>
    );
  });
  
  return (
    <div className="container">
      <div>
        <h3>Bu yerda ko'plab xotiralar yodinga tushishi aniq <span>(texnik sabablarga ko'ra rasmlar sekin yuklanadi, shuning uchun ozroq kutib turasan)</span></h3>
      </div>
      {renderedImg}
      <button className="next-btn" onClick={toggle}>
        Keyingisi
      </button>
    </div>
  );
}
