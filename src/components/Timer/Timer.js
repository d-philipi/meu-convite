import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const countDownDate = new Date("April 6, 2025 16:30:00").getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }
            
            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        };

        // Atualiza imediatamente e depois a cada segundo
        updateTimer();
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, []);

    return (
        <div className="timer">
            {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M {timeLeft.seconds}S
        </div>
    );
}

export default Timer;
