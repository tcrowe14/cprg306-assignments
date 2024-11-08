"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: Math.floor(Math.random() * 10000),
      name: name,
      quantity: quantity,
      category: category,
    };
    onAddItem(item); 
    alert(`Added to Shopping list: ${quantity} of ${name} in ${category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form className="p-2 m-4 bg-red-200 text-black max-w-sm w-full" onSubmit={handleSubmit}>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Item name"
          required
          className="w-full h-10 mt-1 border-2 border-red-100 p-2 rounded-md font-sans font-bold"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex bg-white w-48 h-10 border-2 border-red-100 p-2 rounded-md font-sans">
          <div className="flex w-24 justify-center items-center font-bold">{quantity}</div>
          <div className="flex w-12 justify-center items-center pl-2 pr-1">
            <button
              type="button"
              className="w-12 bg-red-600 hover:bg-red-500 disabled:bg-gray-400 font-bold rounded-md active:outline-none active:ring-2 active:ring-red-400 disabled:active:ring-gray-300"
              onClick={decrement}
              disabled={quantity === 1}
            >
              -
            </button>
          </div>
          <div className="flex w-12 justify-center items-center pr-2 pl-1">
            <button
              type="button"
              className="w-12 bg-green-600 hover:bg-green-500 disabled:bg-gray-400 font-bold rounded-md active:outline-none active:ring-2 active:ring-green-400 disabled:active:ring-gray-300"
              onClick={increment}
              disabled={quantity === 20}
            >
              +
            </button>
          </div>
        </div>
        <select
          className="ml-1 border-2 h-10 border-red-100 p-2 rounded-md font-sans font-bold"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Category
          </option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className={`w-full h-10 mt-4 py-2 px-4 border-2 p-2 rounded-md font-sans ${name ? "bg-red-300 border-red-100 text-white hover:bg-green-500 hover:border-green-600" : "bg-gray-400 text-gray-700 border-gray-100 cursor-not-allowed"}`} disabled={!name}>
        Add to Shopping List
      </button>
    </form>
  );
}
