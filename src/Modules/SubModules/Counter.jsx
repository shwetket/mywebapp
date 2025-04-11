import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState('#ffffff');
    const [textColor, setTextColor] = useState('#000000');
   
    function increaseCount() {
        setCount(count + 1);
    }
    
    function decreaseCount() {
        setCount(count - 1);
    }

    function changeColor() {
        // Generate random hex color with # prefix
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setBgColor(randomColor);
        // Invert text color based on background color brightness
        const r = parseInt(randomColor.slice(1, 3), 16);
        const g = parseInt(randomColor.slice(3, 5), 16);    
        const b = parseInt(randomColor.slice(5, 7), 16);
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
        setTextColor(brightness > 186 ? '#000000' : '#FFFFFF'); // Set text color based on brightness
    
    }

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-4">Counter</h1>
            <div 
                className="flex justify-evenly items-center border-2 border-gray-300 rounded-lg p-4 "
                style={{ backgroundColor: bgColor }} 
            >
                <button className="text-2xl items-center justify-center font-bold border border-gray-400 rounded-full px-5 py-2"
                style={{ color: textColor}} 
                 onClick={increaseCount}>+</button>
                <p className="text-2xl items-center justify-center font-bold px-8 py-2"
                 style={{ color: textColor}}>{count}</p>
                <button className="text-2xl items-center justify-center font-bold border border-gray-400 rounded-full px-5 py-2"
                 style={{ color: textColor}} onClick={decreaseCount} >-</button>
            </div>
            <div className="mt-4">
                <button className="border-2 rounded-md p-2 mx-2 font-bold" onClick={() => {setCount(0); setBgColor('#FFFFFF');setTextColor('#000000');}}>Reset</button>
                <button className="border-2 rounded-md p-2 mx-2 font-bold" onClick={changeColor}>Change Color</button>
            </div>
        </div>
    );
}