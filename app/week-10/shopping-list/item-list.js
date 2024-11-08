"use client";

import Item from "./item"; // Make sure this import line is included

export default function ItemList({ items, onItemSelect }) {
    console.log("Loaded items:", items); // Debugging line to confirm data

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
                </li>
            ))}
        </ul>
    );
}
