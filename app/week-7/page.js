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

                <section className="flex justify-center">
                    <NewItem onAddItem={handleAddItem} />
                </section>

                <section className="flex justify-center">
                    <ItemList items={items} />
                </section>
                
            </main>
        </div>
    );
}