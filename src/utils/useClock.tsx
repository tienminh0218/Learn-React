import React, { useEffect, useState } from "react";
import formatTime from "./formatTime";

const useClock: () => string = () => {
    const [showClock, setShowClock] = useState<string>("");

    useEffect(() => {
        const getDate = setInterval(() => {
            const now: Date = new Date();
            const newTime = formatTime(now);

            setShowClock(newTime);
        }, 1000);

        return () => {
            clearInterval(getDate);
        };
    }, []);

    return showClock;
};

export default useClock;
