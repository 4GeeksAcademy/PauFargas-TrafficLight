import React, { useState } from "react";


export const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState("green");     

    return (
        
        <div className="traffic-Light mt-5">
            <div onClick={() => setSelectedColor("red")}
            className={"light red" + ((selectedColor === "red") ? " glow" : "")}></div>
            <div onClick={()=> setSelectedColor("yellow")} 
            className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}></div>
            <div onClick={()=> setSelectedColor("green")}
            className={"light green" + ((selectedColor === "green") ? " glow" : "")}></div>
        </div>
        
    )
};
