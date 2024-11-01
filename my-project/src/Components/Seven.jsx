import React from 'react'
import { useState, useEffect } from 'react'
const Seven = () => {
    const [timer, setTimer] = useState(60);
    useEffect(() => {
        if (timer > 0) {
            const timerData = setTimeout(() => setTimer(timer - 1), 1000); // Pass a function to setTimeout
            return () => clearTimeout(timerData);
        }
    }, [timer]);

    return (
        <div>
            Timer : {timer} seconds
        </div>
    )
}

export default Seven
