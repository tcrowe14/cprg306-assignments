"use client";

import Item from "./item";

export default function ItemList({ items, onItemSelect, onRemoveItem }) {
    if (!items.length) return <div>No items found.</div>;
    console.log("Rendering ItemList with items:", items);

    return (
        <ul>
            {items.map((item) => {
                console.log("Rendering item:", item); // Debugging log for each item
                return (
                    <li key={item.id || item.name}>
<Item
    id={item.docId} // Use `docId` here
    name={item.name}
    quantity={item.quantity}
    category={item.category}
    onSelect={() => onItemSelect(item.name)}
    onRemove={() => onRemoveItem(item.docId)} // Pass `docId` directly for deletion
/>

                    </li>
                );
            })}
        </ul>
    );
}
