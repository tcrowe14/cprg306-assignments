"use client";

import Item from "./item";

export default function ItemList({ items, onItemSelect, onRemoveItem }) {
    return (
        <ul className="space-y-3 w-96">
            {items.map((item) => (
                <li key={item.id}> {/* Firestore document ID as key */}
                    <Item 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                        onSelect={() => onItemSelect(item.name)}
                        onRemove={() => onRemoveItem(item.id)} // Use Firestore document ID here
                    />
                </li>
            ))}
        </ul>
    );
}

