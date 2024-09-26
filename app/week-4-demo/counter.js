"use client";

import {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <div className="flex justify-center max-w-lg h-24 bg-gray-200">
        <h1>Counter component</h1>
        <div className="flex-1"><button onClick={decrement}>-</button></div>
        <div className="flex-1">{count}</div>
        <div className="flex-1"><button onClick={increment}>+</button></div>
      </div>
    );
  }