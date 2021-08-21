import { useEffect, useRef, useState } from "react";

function changeColor(current: string): string {
    const listColor = ["red", "green", "yellow", "blue", "black", "white"];
    const indexCurrent = listColor.indexOf(current);
    let newColor = indexCurrent;

    while (newColor === indexCurrent) {
        newColor = Math.trunc(Math.random() * 6);
    }

    return listColor[newColor];
}

function useMagicColor(): string {
    const [color, setColor] = useState<string>("red");

    const refColor = useRef<string>(color);

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = changeColor(refColor.current);
            console.log(newColor);
            setColor(newColor);
            refColor.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        };
    }, []);

    return color;
}

export default useMagicColor;
