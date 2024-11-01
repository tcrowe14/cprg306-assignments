"use client";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const router = useRouter();
    const [items, setItems] = useState(itemData);
    const [selectedItemName, setSelectedItemName] = useState('');
    const [sortBy, setSortBy] = useState("name");
    const [categoryEnabled, setCategoryEnabled] = useState(true);
    const [nameEnabled, setNameEnabled] = useState(true);

    const home = async () => {
        router.push("/");
    };

    function handleSortChange() {
        if(sortBy === 'category') {
            setSortBy('name');
            setItems(items.sort((a, b) => a.name.localeCompare(b.name)));
            setCategoryEnabled(true);
            setNameEnabled(false);
        }
        else if(sortBy === 'name') {
            setSortBy('category');
            setItems(items.sort((a, b) => a.category.localeCompare(b.category)));
            setCategoryEnabled(false);
            setNameEnabled(true);
        }
    }

    const getButtonStyles = (sortType) => {
        return sortBy === sortType
            ? "bg-red-400 text-white hover:bg-red-400 active:ring-2 active:ring-red-400 hover:active:ring-red-400"
            : "bg-red-200 text-black hover:bg-green-500 active:ring-2 active:ring-green-500 hover:active:ring-green-500";
    };

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    function handleItemSelect(itemName) {
        let finishedStr = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        finishedStr = finishedStr.trim();
        finishedStr = finishedStr.split(",")[0];

        setSelectedItemName(finishedStr);
    }
    if (!user) {
        return (
            <main>
                <h1 className="text-3xl font-bold m-2">Shopping List App</h1>
                <p className="m-2">Please log in to see the shopping list</p>
                <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={gitHubSignIn}>Login with GitHub</button>
                <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={home}>Index</button>
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
                    disabled={!nameEnabled}
                    onClick={handleSortChange}>
                        Name
                </button>
                <button
                    className={`${getButtonStyles("category")} px-1 py-2 m-2 rounded-sm w-28`}
                    disabled={!categoryEnabled}
                    onClick={handleSortChange}>
                    Category
                </button>
            </div>
                <section className="flex">
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </section>
                <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={firebaseSignOut}>Logout</button>
                <button className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded ml-6 mt-3" onClick={home}>Index</button>
                </div>

                <div className="w-2/3 ml-3 max-h-full overflow-y-auto">
                <h1 className="text-3xl font-bold m-2">Meal Ideas</h1>
                <MealIdeas ingredient={selectedItemName}/>
                </div>
            </main>
        </div>
    );
}