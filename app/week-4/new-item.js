"use client";

import {useState} from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity - 1);

    return (
        <div className="flex bg-red-100 w-48 h-10">
            <div className="flex w-24 justify-center items-center font-bold">
                {quantity}
            </div>
            <div className="flex w-12 justify-center items-center pl-2 pr-1">
                <button className="w-12 bg-red-600 hover:bg-red-500 disabled:bg-gray-400 font-bold rounded-md active:outline-none active:ring-2 active:ring-red-400 disabled:active:ring-gray-300" onClick={decrement} disabled={quantity == 1}>
                    -
                </button>
            </div>
            <div className="flex w-12 justify-center items-center pr-2 pl-1">
                <button className="w-12 bg-green-600 hover:bg-green-500 disabled:bg-gray-400 font-bold rounded-md active:outline-none active:ring-2 active:ring-green-400 disabled:active:ring-gray-300" onClick={increment} disabled={quantity == 20}>
                    +
            </button>
            </div>
      </div>
    );
  }