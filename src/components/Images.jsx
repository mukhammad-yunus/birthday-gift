import React, { useRef, useEffect } from 'react';

export default function Images({link}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const previewImg = new Image();

    const drawImageOnCanvas = () => {
      canvas.width = 400;
      canvas.height = (previewImg.height / previewImg.width) * canvas.width;
      ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
    };

    previewImg.onload = drawImageOnCanvas;
    previewImg.src = link;
  }, []);

  return (
    <canvas ref={canvasRef}></canvas>
  );
}