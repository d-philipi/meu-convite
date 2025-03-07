import React, { useState, useEffect } from "react";
import "./Menu.css";
import useSound from "use-sound";
import som from "./audio.mp3";
import { Link } from "react-router-dom";

function Menu() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [play, { pause }] = useSound(som, { volume: 1, interrupt: true });

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const paused = () => {
    if (isPaused) {
      play();
      setIsPaused(false);
    } else {
      pause();
      setIsPaused(true);
    }
  };

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className={`menu ${isActive ? "activate" : ""}`}>
      <div className="toggle" onClick={handleClick}>
        <ion-icon name={isActive ? "close-outline" : "menu-outline"}></ion-icon>
      </div>
      <li style={{ "--i": 0 }}>
        <Link to={"/presentes"} className="link">
          <ion-icon name="gift-outline"></ion-icon>
        </Link>
      </li>
      <li style={{ "--i": 1 }}>
        <Link to={"/convidados"} className="link">
          <ion-icon name="people-outline"></ion-icon>
        </Link>
      </li>
      <li style={{ "--i": 2 }}>
        <Link to={"/"} className="link">
          <ion-icon name="timer-outline"></ion-icon>
        </Link>
      </li>
      <div className="music" onClick={paused}>
        <a>
          <ion-icon name={isPaused ? "play-outline" : "pause-outline"} />
        </a>
      </div>
    </div>
  );
}

export default Menu;

