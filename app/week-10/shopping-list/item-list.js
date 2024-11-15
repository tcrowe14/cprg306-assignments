"use client";

import Item from "./item";

export default function ItemList({ items, onItemSelect, onRemoveItem }) {
    return (
        <ul className="space-y-3 w-80">
            {items.map((item) => (
                <li key={item.id}>

                    <Item 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                        onSelect={() => onItemSelect(item.name)}
                    />

                    <button
                        className="bg-red-500 text-white py-1 px-3 rounded ml-4"
                        onClick={() => onRemoveItem(item.id)} // Correctly invoke onRemoveItem with item id
                    >
                        Remove
                    </button>

                </li>
            ))}
        </ul>
    );
}
