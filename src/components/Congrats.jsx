import React from "react";
import Confetti from "react-confetti";
import imageSrc from '../images/ava.jpg';

export default function Congrats({ setIsCongrated, setIsImage }) {
  function toggle() {
    setIsCongrated(false);
    setIsImage(true);
  }

  return (
    <>
      <Confetti />
      <div id="congrats" className="container">
        <img className="round-image" src={imageSrc} />
        <div>
          <h1>Azamat</h1>
          <h2>Tug'ilgan kuning bilan tabriklayman</h2>
          <p className="text">
            Alloh
          </p>
          <ul>
            <li>senga barokatli umr bersin</li>
            <li>seni o'ylagan hamma niyatlaringga yetkazsin</li>
            <li>ota-onangni roziligini olishingni oson qilsin</li>
            <li>eng asosiysi baxtni his qildirsin</li>
          </ul>
        </div>
        <button className="next-btn" onClick={toggle}>
          Keyingisi
        </button>
      </div>
    </>
  );
}
