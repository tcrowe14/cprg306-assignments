"use client";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { getItem, addItem, removeItem } from "../_services/shopping-list-service"; // Import removeItem

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const [sortBy, setSortBy] = useState("name");

    useEffect(() => {
        const loadItems = async () => {
            if (user) {
                try {
                    const loadedItems = await getItem(user.uid);
                    setItems(loadedItems || []);
                    sortItems("name", loadedItems || []);
                } catch (e) {
                    console.error("Error loading items", e);
                }
            }
        };
        loadItems();
    }, [user]);

    const sortItems = (type, itemsList = items) => {
        const sortedItems = [...itemsList].sort((a, b) => {
            if (type === "name") return a.name.localeCompare(b.name);
            return a.category.localeCompare(b.category);
        });
        setItems(sortedItems);
    };

    const handleSortChange = (type) => {
        setSortBy(type);
        sortItems(type);
    };

    const handleAddItem = async (newItem) => {
        try {
            const itemId = await addItem(user.uid, newItem);
            const itemWithId = { ...newItem, id: itemId };
            setItems((prevItems) => [...prevItems, itemWithId]);
            sortItems(sortBy, [...items, itemWithId]);
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const handleRemoveItem = async (itemId) => {
        try {
            await removeItem(user.uid, itemId); // Remove item from the database
            setItems((prevItems) => prevItems.filter((item) => item.id !== itemId)); // Update local state
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };
    

    const getButtonStyles = (sortType) => {
        return sortBy === sortType
            ? "bg-red-400 text-white hover:bg-red-400 active:ring-2 active:ring-red-400 hover:active:ring-red-400"
            : "bg-red-200 text-black hover:bg-green-500 active:ring-2 active:ring-green-500 hover:active:ring-green-500";
    };

    if (!user) {
        return (
            <main>
                <h1 className="text-3xl font-bold m-2">Shopping List App</h1>
                <p className="m-2">Please log in to see the shopping list</p>
                <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={gitHubSignIn}>Login with GitHub</button>
                <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={() => router.push("/")}>Index</button>
            </main>
        );
    }

    return (
        <div className="w-full h-screen">
            <main className="flex h-full">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold m-2">Shopping List</h1>
                    <section className="flex">
                        <NewItem onAddItem={handleAddItem} />
                    </section>
                    <div>
                        <span className={"p-1"}>Sort by: </span>
                        <button
                            className={`${getButtonStyles("name")} px-1 py-2 rounded-sm w-28`}
                            onClick={() => handleSortChange("name")}>
                                Name
                        </button>
                        <button
                            className={`${getButtonStyles("category")} px-1 py-2 m-2 rounded-sm w-28`}
                            onClick={() => handleSortChange("category")}>
                            Category
                        </button>
                    </div>
                    <section className="flex">
                    <ItemList items={items} onItemSelect={setSelectedItemName} onRemoveItem={handleRemoveItem} />
                    </section>
                    <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={firebaseSignOut}>Logout</button>
                    <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={() => router.push("/")}>Index</button>
                </div>
                <div className="w-2/3 ml-3 max-h-full overflow-y-auto">
                    <h1 className="text-3xl font-bold m-2">Meal Ideas for {selectedItemName}</h1>
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </main>
        </div>
    );
}
