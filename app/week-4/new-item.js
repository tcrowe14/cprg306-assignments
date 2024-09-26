"use client";

import {useState} from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity - 1);

    return (
        <div class="flex bg-blue w-48 h-10">
            <div className="flex w-24 justify-center items-center bg-slate-200 font-bold">
                {quantity}
            </div>
            <div className="flex w-12 justify-center items-center bg-slate-200 pl-2 pr-1">
                <button className="w-12 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 font-bold rounded-md" onClick={decrement} disabled={quantity == 1}>
                    -
                </button>
            </div>
            <div className="flex w-12 justify-center items-center bg-slate-200 pr-2 pl-1">
                <button className="w-12 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 font-bold rounded-md" onClick={increment} disabled={quantity == 20}>
                    +
            </button>
            </div>
      </div>
    );
  }