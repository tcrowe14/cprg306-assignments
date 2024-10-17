"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";


export default function Page() {

    const [items, setItems] = useState(itemData);
    

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    return (
        <div className="w-full h-screen">
            <main>
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
                <section className="flex">
                    <NewItem onAddItem={handleAddItem} />
                </section>

                <section className="flex">
                    <ItemList items={items} />
                </section>
                
            </main>
        </div>
    );
}