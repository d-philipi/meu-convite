import React, { useState } from "react";
import './Menu.css';

function Menu() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    
    return (
        <div className={`menu ${isActive ? "activate" : ""}`}>
            <div className="toggle" onClick={handleClick}>
                <ion-icon name={isActive ? "close-outline" : "menu-outline"}></ion-icon>
            </div>
            <li className="--i:0;">
                <a href="#">
                    <ion-icon name="gift-outline"></ion-icon>
                </a>
            </li>
            <li className="--i:1;">
                <a href="#">
                    <ion-icon name="people-outline"></ion-icon>
                </a>
            </li>
            <li className="--i:2;">
                <a href="#">
                    <ion-icon name="timer-outline"></ion-icon>
                </a>
            </li>
        </div>
    )
}

export default Menu;