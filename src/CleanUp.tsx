/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect } from 'react'

const CleanUp: React.FC = () => {
    const [currentNum, setCurrentNum] = useState(0);

    const incrementNum = () => {
        console.log("Mouse event invoked !");
        setCurrentNum((preNumber) => preNumber + 1);
    };

    useEffect(() => {
        console.log("useEffect in CleanUp invoked !");
        window.addEventListener("mousedown", incrementNum);

        return () => {
            console.log("Cleanup invoked !");
            window.removeEventListener("mousedown", incrementNum);
        };
    }, []);
    return <div>{currentNum}</div>;
};

export default CleanUp
