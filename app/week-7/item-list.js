"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({items}) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") 
          {
            return a.name.localeCompare(b.name);
          } 
        else if (sortBy === "category") 
          {
            return a.category.localeCompare(b.category);
          }
        return 0;
    });

    const getButtonStyles = (sortType) => {
        return sortBy === sortType
            ? "bg-red-400 text-white hover:bg-red-400 active:ring-2 active:ring-red-400 hover:active:ring-red-400"
            : "bg-red-200 text-black hover:bg-green-500 active:ring-2 active:ring-green-500 hover:active:ring-green-500";
    };

    return (
        <main>
            <div>
            <span className={"p-1"}>Sort by: </span>
                <button
                    onClick={() => setSortBy("name")}
                    className={`${getButtonStyles("name")} px-1 py-2 rounded-sm w-28`}
                >
                    Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`${getButtonStyles("category")} px-1 py-2 m-2 rounded-sm w-28`}
                >
                    Category
                </button>
            </div>
            <section>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </section>
        </main>
    );
}