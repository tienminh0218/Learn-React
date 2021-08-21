import React, { useEffect, useState } from "react";
import useClock from "../../utils/useClock";

const Clock: React.FC = () => {
    const time: string = useClock();

    return (
        <div>
            <h3>{time}</h3>
        </div>
    );
};

export default Clock;
