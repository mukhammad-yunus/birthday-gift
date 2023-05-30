import React from "react";

export default function Greeting({setIsGreated, setIsCongrated}) {
    function toggle(){
    setIsGreated(false)
    setIsCongrated(true)
    }

  return (
    <div id="greeting" className="container">
      <div>
        <h1>Assalomu aleykum do'stim.</h1>
        <p className="text">
          Pastdagi "Keyingisi" tugmasini bos.
        </p>
      </div>
      <button className="next-btn" onClick={toggle}>Keyingisi</button>
    </div>
  );
}
